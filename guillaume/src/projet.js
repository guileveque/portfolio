import "./style/projetStyle.css";
import DevCrush from "./img/DevCrush.png";
import Bgimage from "./img/bg-image.jpg";
import {Link, Route, Switch} from "react-router-dom";


function Projet(){
    return (
        <div>
            	<div class="section section--featured">
                    <div class="hero">
                        <h1>Projet</h1>
                        <h2>Projets réalisé par guillaume pendant la formation web@cademie</h2>
                        <p><Link to="/">Home</Link></p>
                    </div>
                    <div class="row">

                        <div class="column">
                            <div class="ItemCard">
                                <a class="ItemCard__dest cover" href=""></a>
                                <figure class="ItemCard__thumb">
                                    <img src={DevCrush} height="340" width="510" alt=""></img>
                                    <span class="shadow cover"></span>
                                </figure>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ItemCard">
                                <a class="ItemCard__dest cover" href=""></a>
                                <figure class="ItemCard__thumb">
                                    <img src={DevCrush} height="340" width="510" alt=""></img>
                                    <span class="shadow cover"></span>
                                </figure>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ItemCard">
                                <a class="ItemCard__dest cover" href="#"></a>
                                <figure class="ItemCard__thumb">
                                    <img src="#" height="340" width="510" alt=""></img>
                                    <span class="shadow cover"></span>
                                </figure>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ItemCard">
                                <a class="ItemCard__dest cover" href="#"></a>
                                <figure class="ItemCard__thumb">
                                    <img src={DevCrush} height="340" width="510" alt=""></img>
                                    <span class="shadow cover"></span>
                                </figure>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ItemCard">
                                <a class="ItemCard__dest cover" href="#"></a>
                                <figure class="ItemCard__thumb">
                                    <img src={DevCrush} height="340" width="510" alt=""></img>
                                    <span class="shadow cover"></span>
                                </figure>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ItemCard">
                                <a class="ItemCard__dest cover" href="#"></a>
                                <figure class="ItemCard__thumb">
                                    <img src={Bgimage} height="440" width="610" alt=""></img>
                                    <span class="shadow cover"></span>
                                </figure>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ItemCard">
                                <a class="ItemCard__dest cover" href="#"></a>
                                <figure class="ItemCard__thumb">
                                    <img src={DevCrush} height="340" width="510" alt=""></img>
                                    <span class="shadow cover"></span>
                                </figure>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="container_main">
                    <div id="projet1">
                        <div id="picture_project1">
                            <img src={DevCrush}>
                            </img>
                        </div>
                        <div id='comment_picture1'>
                            <p>lorem,frdvùnd eoidjf orf rehfu hrdiuhdh d vfdh vdkfctvghvgvgvhkgv</p>
                        </div>
                    </div>
                    <div id="projet1">
                        <div id="picture_project1">
                            <img src={DevCrush}>
                            </img>
                        </div>
                        <div id='comment_picture1'>
                            <p>lorem,frdvùnd eoidjf orf rehfu hrdiuhdh d vfdh vdkfctvghvgvgvhkgv</p>
                        </div>
                    </div>
                </div>
        </div>

    );
}

export default Projet;