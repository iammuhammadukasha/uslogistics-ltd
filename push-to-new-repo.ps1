# Run this script in PowerShell to point this project to uslogistics-ltd and push.
# Close Cursor (or any app using this repo) first if you get "config file locked" errors.

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "Setting remote to uslogistics-ltd..." -ForegroundColor Cyan
git remote set-url origin https://github.com/iammuhammadukasha/uslogistics-ltd.git
if ($LASTEXITCODE -ne 0) { exit 1 }

Write-Host "Pushing branch 'feat' to origin..." -ForegroundColor Cyan
git push -u origin feat
if ($LASTEXITCODE -ne 0) { exit 1 }

Write-Host "Done. Your code is now in https://github.com/iammuhammadukasha/uslogistics-ltd" -ForegroundColor Green
