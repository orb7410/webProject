import React from 'react';
import bodyCover from '../assets/body-cover.jpeg'
import profilePic from '../assets/profile-pic.jpeg'

const Home = () => {
    return (
        <div className="App-body">
            <div className={"App-image-container"}>
                <img src={bodyCover} className="App-bodyCover" alt="logo" />
            </div>

            <div className={"App-text-container"}>

                <div className={"App-about"} id={"About-me"}>
                    <img src={profilePic} className="App-me-image" alt="logo" />

                    <p className={"App-me-text"}>
                        hey(:
                    </p>

                </div>

                <p>
                    In vitae tellus ac eros dignissim consequat. Aliquam erat volutpat. In aliquam nulla sed convallis rutrum. Quisque a neque egestas ante feugiat fringilla non non turpis. Nunc suscipit ut tortor ac commodo. Aliquam consectetur, nulla consectetur fermentum efficitur, enim ipsum feugiat massa, eu sodales augue magna at orci. Vestibulum efficitur lacus dui, a hendrerit tortor ornare eu. Praesent laoreet neque accumsan dui maximus laoreet. Vivamus turpis nulla, iaculis vel hendrerit sed, hendrerit vitae nisi. Nullam convallis tempus condimentum. Quisque dictum est arcu, molestie consequat enim dignissim vel.

                    Integer metus risus, porttitor vel turpis et, lacinia faucibus augue. Vestibulum dignissim nunc et fermentum hendrerit. Vivamus bibendum massa eget tincidunt ultricies. Integer pellentesque erat vehicula orci ultrices, sit amet ullamcorper diam scelerisque. Integer sed sapien non ante vehicula posuere. Donec tempor, lectus sed dapibus posuere, eros mi euismod turpis, eget dapibus mauris est eget metus. Nulla lacinia iaculis magna, id vulputate nulla pellentesque ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tortor lacus, fermentum faucibus mauris eget, fringilla facilisis tellus. Cras euismod ante felis, non elementum nibh aliquam auctor. Quisque pharetra eros finibus lorem viverra ornare.

                    Nunc eget porttitor sapien. Maecenas tincidunt, diam id ultrices eleifend, augue augue semper tellus, quis finibus ex diam a urna. Cras ullamcorper feugiat massa, ut varius elit. In id elit a nisi congue gravida ac vel diam. Nulla eu porttitor lectus. Ut vestibulum lacus at mi aliquam, ut congue lacus vehicula. Mauris neque diam, scelerisque vel tortor in, condimentum lobortis felis. Quisque sagittis scelerisque gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nulla est, scelerisque non libero vel, elementum faucibus ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

                    Aliquam tempor, leo feugiat lobortis rhoncus, orci lectus egestas enim, in ullamcorper lacus mi aliquam enim. Vivamus nec urna massa. Maecenas a sem pellentesque, porta nunc ac, aliquam elit. Donec at orci felis. Nullam id rhoncus lorem, vel luctus mi. Nam sagittis tellus ac interdum consectetur. Integer sem nisi, lobortis vel augue a, dictum auctor leo. In magna nisl, blandit id mauris a, fringilla lacinia augue. Sed dignissim pellentesque leo, eget volutpat metus consectetur ut. Nam vitae bibendum felis.</p>
                
                </div>
                <div className={"App-contact"} id={"contact"}>

                    <p className={"contact-text"}>
                        Avigile
                        050224555
                    </p>

                </div>
        </div>
    );
}
export default Home;