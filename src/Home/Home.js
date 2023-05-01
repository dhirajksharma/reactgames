import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import thunder from '../res/icons8-lightning-bolt-48.png'

class Home extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          currGame:"bonjour"
        };
    
        this.updateCurrGame=this.updateCurrGame.bind(this);
    }
    static defaultProps={
        db:[
            {
                title:"bonjour",
                para:"Welcome to PS React! Here, you will find some simple games made entirely using Javascript. Swipe the cards, select the game that interests you, and let's play!",
                imgs:"bg-no-repeat bg-cover bg-[url('https://www.wallpaperbetter.com/wallpaper/737/3/587/game-boy-old-boy-hd-1080P-wallpaper.jpg')] bg-center"
            },
            {
                title:"hangman",
                para:"Do you have it in you to guess the 5 letter word and save your life? Every guess can either get you a step closer to life or to death. Think! Every letter counts",
                imgs:"bg-no-repeat bg-cover bg-[url('https://upload.wikimedia.org/wikipedia/commons/b/bf/The_Hanged_Man_MET_DT225350.jpg')] bg-center"
            },
            {
                title:"lights-out",
                para:"Maybe you are not the dictionary guy, maybe you like to play with lights. Let's see how many moves you need to complete the game. Ready, Steady, Lights On!",
                imgs:"bg-no-repeat bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/005/658/953/original/wallpaper-with-blue-light-color-blue-grid-mosaic-background-free-vector.jpg')] bg-center"
            },
            // {
            //     title:"Pong",
            //     para:"Snake's Hungry! And she says she'll eat you, unless you guide her to other prey.",
            //     imgs:"bg-no-repeat bg-cover bg-[url('https://d1tq3fcx54x7ou.cloudfront.net/uploads/store/tenant_161/download/366/image/large-041f064dd94c96b097973e5d41a9c45f.jpg')] bg-center"
            // },
            // {
            //     title:"Dino Chrome",
            //     para:"It's the apocalype! The meteorite is here, and our dear Dino is in no mood to go extinct. Do you have it in you, to help him race out this rock",
            //     imgs:"bg-no-repeat bg-cover bg-[url('https://steamuserimages-a.akamaihd.net/ugc/1613934288762909786/049D1992EB339B8BC6687937E06042EBEBE332E2/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')] bg-center"
            // },
            // {
            //     title:"Snake Eyes",
            //     para:"Snake's Hungry! And she says she'll eat you, unless you guide her to other prey.",
            //     imgs:"bg-no-repeat bg-cover bg-[url('https://wallpapercave.com/wp/wp9448083.jpg')] bg-center"
            // },
            // {
            //     title:"Pac Man",
            //     para:"Snake's Hungry! And she says she'll eat you, unless you guide her to other prey.",
            //     imgs:"bg-no-repeat bg-cover bg-[url('https://www.pixelstalk.net/wp-content/uploads/2016/05/Ms-PacMan.png')] bg-center"
            // },
            
        ]
    };
    
    updateCurrGame(game){
        this.setState((prevState) => {
            return {
                currGame:game
            };
        });
    }

    render(){
        
        const sliderSettings = {
            arrows:true,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 1,
            speed: 500,
            afterChange:() =>{
                    this.updateCurrGame(document.querySelector('.slick-center h3').innerHTML);
                },
          };


        return (
            <div id="home" className='w-full pb-4 h-[80vh] flex flex-col justify-around overflow-hidden'>
                <div className='sm:w-[80%] sm:mx-auto'>
                    <Slider {...sliderSettings}>
                        {this.props.db.map((db) =>
                            <Card name={db.title} cont={db.para} imgurl={db.imgs}/>
                        )}
                    </Slider>
                </div>
            {
                this.state.currGame==='bonjour'?
                
                    <div className='w-[80%] h-[3.5rem] bg-white mx-auto rounded-lg mt-6 flex justify-around items-center'>
                        {
                            JSON.parse(localStorage.getItem(this.state.currGame))!==null?(
                                <div className='flex items-center'>
                                    <img src={thunder} className='aspect-square h-8'></img>
                                        {JSON.parse(localStorage.getItem(this.state.currGame))}
                                </div>
                            ):(
                                null
                            )
                        }
                        <p className='font-poppins text-white'>
                        {
                            JSON.parse(localStorage.getItem(this.state.currGame))!==null?'Let\'s Beat This Now!':'Let\'s Play Something New!'
                        }
                        </p>
                    </div>
                :
                <Link to={
                    this.state.currGame==='bonjour'?'/':this.state.currGame
                }>
                    <div className='w-[80%] h-[3.5rem] bg-green-400 mx-auto rounded-lg mt-6 flex justify-around items-center'>
                        {
                            JSON.parse(localStorage.getItem(this.state.currGame))!==null?(
                                <div className='flex items-center'>
                                    <img src={thunder} className='aspect-square h-8'></img>
                                        {JSON.parse(localStorage.getItem(this.state.currGame))}
                                </div>
                            ):(
                                null
                            )
                        }
                        <p className='font-poppins'>
                        {
                            JSON.parse(localStorage.getItem(this.state.currGame))!==null?'Let\'s Beat This Now!':'Let\'s Play!'
                        }
                        </p>
                    </div>
                </Link>
            }    
            </div>
        );
    }
}

export default Home;