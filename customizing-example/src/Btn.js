// function Btn() {
//     const clickHandler = 
//         () => console.log('Clicked')
//     return (
//         <button onClick={clickHandler}>
//             Click me
//         </button>
//     )
// }

function Btn() {
    const clickHandler =  
        () => console.log('Hovered')
    return (
        <button onMouseOver={clickHandler}>
            Click me
        </button>
    )
}


export default Btn;