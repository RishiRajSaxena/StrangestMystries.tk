//Loader of page
window.addEventListener("load", function () 
{
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; // class "loader hidden"
});






     const successCallback = (position) =>
        {
            console.log(position);
        }
        const errorCallback = (error) =>
        {
          conole.error(error);
        }

        const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback); 
    