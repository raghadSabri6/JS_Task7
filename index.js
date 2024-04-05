function counters() {
    const btn = document.querySelectorAll("button");
    for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = counterIncrease;
    }

    function counterIncrease(e) {
        const className = e.target.className;
        let counter = parseInt(document.querySelector(`.${className} + p`).textContent) + 1;
        document.querySelector(`.${className} + p`).textContent = counter;
    }
}

counters();
