    function checkOnlineStatus() {

        if (navigator.onLine) {

            document.getElementById("online-status").innerHTML = '<p class="badge badge-outline"><i class="ri-circle-fill" style="color:green;font-size:10px;padding-right:3px;"></i> Online </p>'; 

            // You can also change the icon here to a "live" icon

        } else {

            document.getElementById("online-status").innerHTML = '<p class="badge badge-outline"> Offline </p>'; 

            // Display an "offline" icon

        }

    }



    // Call the function on page load and whenever connection changes

    window.addEventListener('load', checkOnlineStatus);

    window.addEventListener('online', checkOnlineStatus);

    window.addEventListener('offline', checkOnlineStatus);
