
export default function Header() {

    return (

        <header className= 'fixed flex w-full justify-between pt-4 px-4 z-39'>
            <div>
                <img src= "logo.png" alt= "Mihoyo company logo"/>
            </div>

            <div className= 'mt-2'>
                <button className= 'uppercase px-6' >sound</button>
                <button className= 'uppercase px-6' >[ EN ] /CN</button>
                <button className= 'uppercase pl-6' >PRE-ORDER NOW</button>
                <button className= 'uppercase pl-6' >menu</button>
            </div>
        </header>
    );
}