@echo off
setlocal
if defined MIMO_NODE (
  set "NODE=%MIMO_NODE%"
) else (
  set "NODE=node"
)
if defined MIMO_NPM (
  set "NPM=%MIMO_NPM%"
) else (
  set "NPM=npm"
)
cd /d "%~dp0.."
"%NODE%" "%NPM%" %*
exit /b %ERRORLEVEL%
