const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
const REPO_OWNER = 'asdfgh20220610';
const REPO_NAME = 'asdfgh20220610.github.io';
const ISSUE_TITLE = 'Article View Counts';

interface ViewCount {
    [key: string]: number;
}

// 从 GitHub Issue 获取所有文章的阅读次数
async function getViewsFromGitHub(): Promise<ViewCount> {
    try {
        // 查找存储阅读次数的 issue
        const issuesResponse = await fetch(
            `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues?labels=view-count`,
            {
                headers: GITHUB_TOKEN ? {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json',
                } : {}
            }
        );
        
        const issues = await issuesResponse.json();
        const viewCountIssue = issues.find((issue: any) => issue.title === ISSUE_TITLE);
        
        if (!viewCountIssue) {
            // 如果 issue 不存在，创建一个新的
            if (!GITHUB_TOKEN) return {};
            
            const createResponse = await fetch(
                `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues`,
                {
                    method: 'POST',
                    headers: {
                        'Authorization': `token ${GITHUB_TOKEN}`,
                        'Accept': 'application/vnd.github.v3+json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: ISSUE_TITLE,
                        body: '{}',
                        labels: ['view-count']
                    })
                }
            );
            return {};
        }
        
        // 解析 issue 内容
        return JSON.parse(viewCountIssue.body);
    } catch (error) {
        console.error('Error fetching views:', error);
        return {};
    }
}

// 更新 GitHub Issue 中的阅读次数
async function updateViewsOnGitHub(views: ViewCount, issueNumber: number): Promise<void> {
    if (!GITHUB_TOKEN) return;

    try {
        await fetch(
            `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues/${issueNumber}`,
            {
                method: 'PATCH',
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    body: JSON.stringify(views, null, 2)
                })
            }
        );
    } catch (error) {
        console.error('Error updating views:', error);
    }
}

// 获取特定文章的阅读次数
export async function getViews(slug: string): Promise<number> {
    const views = await getViewsFromGitHub();
    return views[slug] || 0;
}

// 增加文章的阅读次数
export async function incrementViews(slug: string): Promise<number> {
    try {
        // 获取当前的阅读次数
        const issuesResponse = await fetch(
            `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues?labels=view-count`,
            {
                headers: GITHUB_TOKEN ? {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json',
                } : {}
            }
        );
        
        const issues = await issuesResponse.json();
        const viewCountIssue = issues.find((issue: any) => issue.title === ISSUE_TITLE);
        
        if (!viewCountIssue) {
            return 0;
        }
        
        // 更新阅读次数
        const views = JSON.parse(viewCountIssue.body);
        views[slug] = (views[slug] || 0) + 1;
        
        // 保存更新后的阅读次数
        await updateViewsOnGitHub(views, viewCountIssue.number);
        
        return views[slug];
    } catch (error) {
        console.error('Error incrementing views:', error);
        return 0;
    }
}
