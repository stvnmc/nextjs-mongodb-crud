export function getCookie(req, name) {
    const cookies = req.headers.get('cookie');
    if (!cookies) return null;
  
    const cookieArray = cookies.split(';').map(cookie => cookie.trim().split('='));
    const cookieObject = cookieArray.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  
    return cookieObject[name] || null;
  }
  