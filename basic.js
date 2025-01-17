window.onload = () => {
    let testEntityAdded = false;
    //y=-\left(\frac{1}{10}x+0.5\right)^{2}+0.65
    let p=-0.5
    let i=-3;
    let k=0;
    let increasing = false
    setInterval(() => {
        const entity = document.getElementById("box");
        entity.setAttribute('position', `${p} ${k} ${i}`);
        if (i <= -20 && !increasing) {
            increasing = true;  // Set flag to start increasing i
        }
    
        // Update i (change direction based on the flag)
        if (increasing && i < -3) {
            p-=0.025
            i += 0.25;  // After i reaches -30, start increasing i (moving to the right)
        } else if (increasing && i >= -3) {
            console.log("made it")
            i=-3
        }
        else {
            i -= 0.25;  // Before reaching -30, decrease i (moving to the left)
            p-=0.025
        }
    
        k= ( -1 *Math.pow(-1 * (1/25) * i + 3, 2) + 7)
        
        console.log(i, k)
      }, 100); // Executes every 1 second (1000 milliseconds)
    // const el = document.getElementById("marker");
    
    // el.addEventListener("gps-camera-update-position", e => {
    //     if(!testEntityAdded) {
    //         alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
    //         // Add a box to the north of the initial GPS position
    //         const entity = document.getElementById("id")
    //         entity.setAttribute('gps-new-entity-place', {
    //             latitude: e.detail.position.latitude + 0.001,
    //             longitude: e.detail.position.longitude
    //         });
    //         document.querySelector("a-scene").appendChild(entity);
    //     }
    //     testEntityAdded = true;
    // });
};
