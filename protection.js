// Proteção contra inspeção de elementos e menu de contexto
(function() {
    'use strict';
    
    // Desabilita menu de contexto (botão direito)
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Desabilita seleção de texto
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Desabilita arrastar elementos
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Desabilita teclas de atalho para ferramentas de desenvolvedor
    document.addEventListener('keydown', function(e) {
        // F12 - Ferramentas de desenvolvedor
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        
        // Ctrl+Shift+I - Ferramentas de desenvolvedor
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            return false;
        }
        
        // Ctrl+Shift+J - Console
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
            e.preventDefault();
            return false;
        }
        
        // Ctrl+Shift+C - Seletor de elementos
        if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
            e.preventDefault();
            return false;
        }
        
        // Ctrl+U - Ver código fonte
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            return false;
        }
        
        // Ctrl+S - Salvar página
        if (e.ctrlKey && e.keyCode === 83) {
            e.preventDefault();
            return false;
        }
        
        // Ctrl+A - Selecionar tudo
        if (e.ctrlKey && e.keyCode === 65) {
            e.preventDefault();
            return false;
        }
        
        // Ctrl+P - Imprimir
        if (e.ctrlKey && e.keyCode === 80) {
            e.preventDefault();
            return false;
        }
        
        // F5 - Atualizar (opcional, descomente se quiser desabilitar)
        // if (e.keyCode === 116) {
        //     e.preventDefault();
        //     return false;
        // }
        
        // Ctrl+R - Atualizar (opcional, descomente se quiser desabilitar)
        // if (e.ctrlKey && e.keyCode === 82) {
        //     e.preventDefault();
        //     return false;
        // }
    });
    
    // Detecta se o DevTools está aberto (método básico)
    let devtools = {
        open: false,
        orientation: null
    };
    
    const threshold = 160;
    
    setInterval(function() {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
            if (!devtools.open) {
                devtools.open = true;
                console.clear();
                document.documentElement.innerHTML = '<div style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Arial;font-size:24px;color:#333;text-align:center;"><h1>⚠️ Acesso Negado</h1><p>Ferramentas de desenvolvedor não são permitidas neste site.</p></div>';
            }
        } else {
            devtools.open = false;
        }
    }, 500);
    
    // Limpa console periodicamente
    setInterval(function() {
        console.clear();
    }, 1000);
    
    // Adiciona CSS para desabilitar seleção
    const style = document.createElement('style');
    style.textContent = `
        * {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
            -webkit-tap-highlight-color: transparent;
        }
        
        input, textarea {
            -webkit-user-select: text;
            -moz-user-select: text;
            -ms-user-select: text;
            user-select: text;
        }
        
        body {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
    `;
    document.head.appendChild(style);
    
})(); 