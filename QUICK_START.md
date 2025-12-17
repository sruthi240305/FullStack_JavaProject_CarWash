# Quick Start Guide

## 🚀 Quick Testing Steps

### 1. Start MySQL Database
Make sure MySQL is running on your system.

**Windows:**
```powershell
# Check MySQL service
Get-Service -Name MySQL*
# Start if needed
Start-Service -Name MySQL80
```

### 2. Start Backend (Terminal 1)
```powershell
cd Backend\demo
.\mvnw.cmd spring-boot:run
```

**Wait for:** `Started DemoApplication in X.XXX seconds`

### 3. Start Frontend (Terminal 2)
```powershell
cd FrontEnd
npm run dev
```

**Wait for:** `Local: http://localhost:5173`

### 4. Test in Browser
1. Open: `http://localhost:5173`
2. You should see the login page
3. Click "Register" to create an account
4. Fill the form and register
5. Login with your credentials

---

## ✅ Quick Verification

### Check Backend is Running:
Open browser: `http://localhost:8080/api/auth/login`
- Should see error page (405 Method Not Allowed) = ✅ Server is running!

### Check Frontend is Running:
Open browser: `http://localhost:5173`
- Should see login form = ✅ Frontend is running!

### Test API with PowerShell:
```powershell
.\test-backend.ps1
```

---

## 🔍 Check Browser Console

1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for any errors (red text)
4. Go to Network tab
5. Try logging in
6. Check if API calls are successful (status 200)

---

## 📝 Check localStorage

After successful login:
1. Open DevTools (F12)
2. Go to Application tab (Chrome) or Storage tab (Firefox)
3. Click on Local Storage → `http://localhost:5173`
4. You should see:
   - `token`: JWT token string
   - `user`: JSON with user info

---

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| Backend won't start | Check MySQL is running |
| CORS error | Backend and frontend must both be running |
| 401 Unauthorized | Check email/password are correct |
| Can't connect | Check backend URL in `authService.js` |

---

## 📞 Test Endpoints Manually

**Using PowerShell:**
```powershell
# Register
$body = @{email="test@test.com"; password="pass123"; firstName="Test"; lastName="User"} | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:8080/api/auth/register" -Method POST -ContentType "application/json" -Body $body

# Login
$body = @{email="test@test.com"; password="pass123"} | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:8080/api/auth/login" -Method POST -ContentType "application/json" -Body $body
```

---

## ✨ Success Indicators

✅ Backend console shows: "Started DemoApplication"  
✅ Frontend shows login page  
✅ No errors in browser console  
✅ Registration creates user successfully  
✅ Login returns token  
✅ Token stored in localStorage  

If all above are ✅, your application is running properly! 🎉

