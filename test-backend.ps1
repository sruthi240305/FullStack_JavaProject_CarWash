# PowerShell script to test backend endpoints

Write-Host "Testing Backend API Endpoints..." -ForegroundColor Cyan
Write-Host ""

# Test 1: Check if server is running
Write-Host "1. Checking if backend server is running..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:8080/api/auth/login" -Method POST -ContentType "application/json" -Body '{}' -ErrorAction Stop
    Write-Host "   Server is running!" -ForegroundColor Green
} catch {
    if ($_.Exception.Response.StatusCode -eq 405) {
        Write-Host "   Server is running! (405 is expected for GET on POST endpoint)" -ForegroundColor Green
    } else {
        Write-Host "   ERROR: Backend server is not running on port 8080" -ForegroundColor Red
        Write-Host "   Please start the backend with: cd Backend/demo; .\mvnw.cmd spring-boot:run" -ForegroundColor Yellow
        exit 1
    }
}

Write-Host ""

# Test 2: Test Registration
Write-Host "2. Testing Registration..." -ForegroundColor Yellow
$registerBody = @{
    email = "testuser@example.com"
    password = "password123"
    firstName = "Test"
    lastName = "User"
} | ConvertTo-Json

try {
    $registerResponse = Invoke-RestMethod -Uri "http://localhost:8080/api/auth/register" -Method POST -ContentType "application/json" -Body $registerBody
    Write-Host "   Registration successful!" -ForegroundColor Green
    Write-Host "   Token: $($registerResponse.token.Substring(0, 20))..." -ForegroundColor Gray
    Write-Host "   Email: $($registerResponse.email)" -ForegroundColor Gray
} catch {
    if ($_.Exception.Response.StatusCode -eq 400) {
        Write-Host "   User might already exist, trying login instead..." -ForegroundColor Yellow
    } else {
        Write-Host "   ERROR: Registration failed - $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""

# Test 3: Test Login
Write-Host "3. Testing Login..." -ForegroundColor Yellow
$loginBody = @{
    email = "testuser@example.com"
    password = "password123"
} | ConvertTo-Json

try {
    $loginResponse = Invoke-RestMethod -Uri "http://localhost:8080/api/auth/login" -Method POST -ContentType "application/json" -Body $loginBody
    Write-Host "   Login successful!" -ForegroundColor Green
    Write-Host "   Token: $($loginResponse.token.Substring(0, 20))..." -ForegroundColor Gray
    Write-Host "   User: $($loginResponse.firstName) $($loginResponse.lastName)" -ForegroundColor Gray
} catch {
    Write-Host "   ERROR: Login failed - $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Write-Host "All tests completed!" -ForegroundColor Cyan

