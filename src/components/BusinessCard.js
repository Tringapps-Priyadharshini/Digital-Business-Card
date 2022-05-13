import personlogo from '../assets/personlogo.png'
import '../assets/BusinessCard.css'
import mail from '../assets/mailimg.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/fb.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
export default function BusinessCard(){
    return(
        <div className='businesscard'>
        <div className='card'>
            <table bgcolor = "black">
                <tr>
                    <td><img src ={personlogo} alt = "logo" ></img></td>
                </tr>
                <tr>
                    <td className='persondetails'>
                        <h3>Laura Smith</h3>
                        <h4>Frontend Developer</h4>
                        <h5>laura@gmail.com</h5>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className='email'><img src ={mail} alt ="logo" width="20px"></img>&nbsp;<b>Email</b></button>
                        <button className='linkedin'><img src ={linkedin} alt ="logo" width="20px"></img>&nbsp;<b>LinkedIn</b></button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4>About</h4>
                        <p>Front-end developers create the user interface (UI) that determines what each part of a site or application does and how it will look.
If someone wanted to build a website, for example, they might hire a front-end developer to create the site's layout.
The front-end developer determines where to place images, what the navigation should look like, and how to present the site. 
Much of their work involves ensuring the appearance and layout of the site or application is easy to navigate and intuitive for the user.</p>

                    </td>
                </tr>
                <tr>
                    <td>
                        <h4>Interests</h4>
                        <p>There are a lot of reasons why someone might want to become a front end developer:
 Money: The job pays well and has strong career prospects. Challenge: You get to work on a variety of interesting things.
 Impact: Front end development work is seen by everyone who interacts with a brand.

</p>
                    </td>
                </tr>
                <tfoot>
                    <tr>
                        <td>
                            <img src = {twitter} alt = "twitter" width ="20px" className='footerImage'></img>
                            <img src = {facebook} alt = "facebook" width ="20px" className='footerImage'></img>
                            <img src = {instagram} alt = "instagram" width = "20px" className='footerImage'></img>
                            <img src = {github} alt = "github" width = "20px" className='footerImage'></img>
                            
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
        </div>
    )
}