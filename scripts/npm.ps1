# Scripts — use managed Node when system node/npm is missing
$ErrorActionPreference = 'Stop'
$node = if ($env:MIMO_NODE) { $env:MIMO_NODE } else { 'node' }
$npm  = if ($env:MIMO_NPM)  { $env:MIMO_NPM }  else { 'npm' }
Set-Location (Split-Path $PSScriptRoot -Parent)
& $node $npm @args
exit $LASTEXITCODE
