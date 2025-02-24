function checkOnlineStatus() {

        if (navigator.onLine) {

            document.getElementById("online-status").innerHTML = ' Online'; 

            // You can also change the icon here to a "live" icon

        } else {

            document.getElementById("online-status").innerHTML = 'Offline'; 

            // Display an "offline" icon

        }

    }



    // Call the function on page load and whenever connection changes

    window.addEventListener('load', checkOnlineStatus);

    window.addEventListener('online', checkOnlineStatus);

    window.addEventListener('offline', checkOnlineStatus);
