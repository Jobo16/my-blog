$ftp = "ftp://118.31.76.45"
$user = "Bd2RjCfNn5TB"
$pass = "wSz31zQ35Tme"

$webclient = New-Object System.Net.WebClient
$webclient.Credentials = New-Object System.Net.NetworkCredential($user, $pass)

$files = Get-ChildItem -Path ".\dist" -Recurse -File
foreach ($file in $files) {
    $relativePath = $file.FullName.Replace((Get-Item ".\dist").FullName + "\", "")
    $targetUrl = "$ftp/www/wwwroot/blog/$($relativePath.Replace("\", "/"))"
    Write-Host "Uploading $($file.FullName) to $targetUrl"
    $webclient.UploadFile($targetUrl, $file.FullName)
}
