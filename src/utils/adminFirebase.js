import admin from 'firebase-admin';// Ruta relativa al archivo de clave de servicio

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccoun),
  });
}

export default admin;
