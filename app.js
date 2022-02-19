const  btn = document.querySelector('.btn')
const  body = document.querySelector('body')

btn.addEventListener('click', generator)

generator()

function generator() {
    const colors = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
    ]
    
    
    function generate() {
        let icon = '#'
        for (let i = 0; i < 6; i++) {
            const generateRandom =  Math.floor(Math.random() * colors.length)
            icon += colors[generateRandom]
        }  
        return icon 
    }
    
    
    
    
    const  randomColor1 = generate()
    const  randomColor2 = generate()
    
    const randomDeg = Math.floor(Math.random() * 361)
    
    
    body.style.background = `linear-gradient(${randomDeg}deg, ${randomColor1},
        ${randomColor2})`
    
    document.querySelector('p').textContent = `linear-gradient(${randomDeg}deg, ${randomColor1}, ${randomColor2})`
    
    
}