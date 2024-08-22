async function loadData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data.json');
        }

        const data = await response.json();
        let total = 0;
        data.forEach(item => {
            const elementId = `${item.category}`;
            const element = document.getElementById(elementId);
            total += item.score;
            if (element) {
                element.textContent = item.score;
            }
        });
        total = total/data.length;
        
        const headline = document.querySelector('.circle h1');
        headline.textContent = Math.floor(total);
    } catch (error) {
        console.error('Error: 39483if', error);
    }
}

loadData();