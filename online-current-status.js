document.head.insertAdjacentHTML(
    'beforeend',
    '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css" />'); 

document.head.insertAdjacentHTML(
    'beforeend',
    '<link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.23/dist/full.min.css" rel="stylesheet" type="text/css" />'); 

document.head.insertAdjacentHTML(
    'beforeend',
    '<link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.23/dist/full.min.css" rel="stylesheet" type="text/css" />'); 

document.head.insertAdjacentHTML(
    'beforeend',
    '<script src="https://cdn.tailwindcss.com"></script>'); 

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
