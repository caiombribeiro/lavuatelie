
import "./footeer.css"


function Footeer() {
    return (
        <footer className='bg_footer'>
            <div className='contatos'>
                <div className='divisao_footer'>
                    <h3>Contato</h3>
                </div>
                <div className='divisao_footer flex_collumn'>
                    <h3>Redes Sociais</h3>
                    <div className='flex_row'>
                        <a href='https://www.instagram.com/flabtt/'><img class="icon" alt="I" src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" /></a>
                        <a href='https://www.instagram.com/flabtt/'><p>flabtt</p></a>
                        
                    </div>
                </div>
            </div>
            <div className='final_texto'>Design by ©CaioMarques</div>
        </footer>
    )
}

export default Footeer

