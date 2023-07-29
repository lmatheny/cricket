import React, { useState, useRef, useEffect, useCallback } from "react";
import "./game.css";
import "./App.css";
//import blankAd from './icons/contact.png'

import Webcam from "react-webcam";
import WebcamImage from "./WebcamImage";


import guy1 from './icons/avs/a1.png'
import guy2 from './icons/avs/a2.png'
import guy3 from './icons/avs/a3.png'
import guy4 from './icons/avs/a4.png'
import guy5 from './icons/avs/a5.png'

import guy6 from './icons/avs/a6.png'
import guy7 from './icons/avs/a7.png'
import guy8 from './icons/avs/a8.png'
import guy9 from './icons/avs/a9.png'
import guy10 from './icons/avs/a10.png'

import guy11 from './icons/avs/a11.png'
import guy12 from './icons/avs/a12.png'
import guy13 from './icons/avs/a13.png'
import guy14 from './icons/avs/a14.png'
import guy15 from './icons/avs/a15.png'

import guy16 from './icons/avs/a16.png'
import guy17 from './icons/avs/a17.png'
import guy18 from './icons/avs/a18.png'
import guy19 from './icons/avs/a19.png'
import guy20 from './icons/avs/a20.png'



import noMarks from './icons/none.png'
import oneMarks from './icons/s1.png'
import twoMarks from './icons/s2.png'
import threeMarks from './icons/s3.png'
import bull from './icons/guy.png'
import rotatePic from './icons/rotate.png'
import cameraPic from './icons/camera.png'
import vs from './icons/vs.jpeg'
import bar from './icons/line.png'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { View, StyleSheet, Text } from 'react-native';
import { isMobile } from 'react-device-detect';
import { Hidden } from "@mui/material";

import { VerticalAlignBottom } from "@mui/icons-material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';





let widthTotal = window.innerWidth;

const Item = styled(Paper)(({ theme }) => ({
}));





export default function Game() {

  const [isHidden, setIsHidden] = useState(true);

  const toggleImageVisibility = () => {
    setIsHidden(!isHidden);
  };

  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 300,
    height: 300,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);


  //pic 2
  const [isHidden2, setIsHidden2] = useState(true);

  const toggleImageVisibility2 = () => {
    setIsHidden2(!isHidden2);
  };

  const [img2, setImg2] = useState(null);
  const webcamRef2 = useRef(null);

  const videoConstraints2 = {
    width: 200,
    height: 200,
    facingMode: "user",
  };

  const capture2 = useCallback(() => {
    const imageSrc2 = webcamRef2.current.getScreenshot();
    setImg2(imageSrc2);
  }, [webcamRef2]);

  //pic 3
  const [isHidden3, setIsHidden3] = useState(true);

  const toggleImageVisibility3 = () => {
    setIsHidden3(!isHidden3);
  };

  const [img3, setImg3] = useState(null);
  const webcamRef3 = useRef(null);

  const videoConstraints3 = {
    width: 200,
    height: 200,
    facingMode: "user",
  };

  const capture3 = useCallback(() => {
    const imageSrc3 = webcamRef3.current.getScreenshot();
    setImg3(imageSrc3);
  }, [webcamRef3]);

  //pic4
  const [isHidden4, setIsHidden4] = useState(true);


  const toggleImageVisibility4 = () => {
    setIsHidden4(!isHidden4);
  };


  const [img4, setImg4] = useState(null);
  const webcamRef4 = useRef(null);


  const videoConstraints4 = {
    width: 200,
    height: 200,
    facingMode: "user",
  };


  const capture4 = useCallback(() => {
    const imageSrc4 = webcamRef4.current.getScreenshot();
    setImg4(imageSrc4);
  }, [webcamRef4]);




  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }
  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions)
    }
  }, [])




  //points
  const [negativeMode, setNegativeMode] = useState(0);
  const [negativeModeColor, setNegativeModeColor] = useState("success");
  const [negativeModeText, setNegativeModeText] = useState("Undo a Move");
  const swapScoreMode = () => {

    if (negativeMode === 0) {

      setNegativeMode(1);
      setNegativeModeColor("error")
      setNegativeModeText("Return to Game")

    } else {
      setNegativeMode(0)
      setNegativeModeColor("success")
      setNegativeModeText("Undo a Move")
    }
  }



  const [playerOnePic, setPlayerOnePic] = useState(guy1);

  const changeplayer1Icon = () => {
    // if(player1Value === 4) {
    //   setPlayer1Value(0);
    // } else {
    //   setPlayer1Value(player1Value + 1);
    // }


    if (isHidden) {
      if (playerOnePic === guy1) {
        setPlayerOnePic(guy2);
      } else if (playerOnePic === guy2) {
        setPlayerOnePic(guy3);
      } else if (playerOnePic === guy3) {
        setPlayerOnePic(guy4);
      } else if (playerOnePic === guy4) {
        setPlayerOnePic(guy5);
      } else if (playerOnePic === guy5) {
        setPlayerOnePic(guy6);
      } else if (playerOnePic === guy6) {
        setPlayerOnePic(guy7);
      } else if (playerOnePic === guy7) {
        setPlayerOnePic(guy8);
      } else if (playerOnePic === guy8) {
        setPlayerOnePic(guy9);
      } else if (playerOnePic === guy9) {
        setPlayerOnePic(guy10);
      } else if (playerOnePic === guy10) {
        setPlayerOnePic(guy11);
      } else if (playerOnePic === guy11) {
        setPlayerOnePic(guy12);
      } else if (playerOnePic === guy12) {
        setPlayerOnePic(guy13);
      } else if (playerOnePic === guy13) {
        setPlayerOnePic(guy14);
      } else if (playerOnePic === guy14) {
        setPlayerOnePic(guy15);
      } else if (playerOnePic === guy15) {
        setPlayerOnePic(guy16);
      }  else if (playerOnePic === guy16) {
        setPlayerOnePic(guy17);
      } else if (playerOnePic === guy17) {
        setPlayerOnePic(guy18);
      } else if (playerOnePic === guy18) {
        setPlayerOnePic(guy19);
      } else if (playerOnePic === guy19) {
        setPlayerOnePic(guy20);
      } else if (playerOnePic === guy20) {
        setPlayerOnePic(guy1);
      } 


    } else {
      setIsHidden(true);
    }

  }

  const [playerTwoPic, setPlayerTwoPic] = useState(guy6);


  const changeplayer2Icon = () => {
    // if(player2Value === 4) {
    //   setPlayer2Value(0);
    // } else {
    //   setPlayer2Value(player2Value + 2);
    // }


    if (isHidden2) {
      if (playerTwoPic === guy1) {
        setPlayerTwoPic(guy2);
      } else if (playerTwoPic === guy2) {
        setPlayerTwoPic(guy3);
      } else if (playerTwoPic === guy3) {
        setPlayerTwoPic(guy4);
      } else if (playerTwoPic === guy4) {
        setPlayerTwoPic(guy5);
      } else if (playerTwoPic === guy5) {
        setPlayerTwoPic(guy6);
      } else if (playerTwoPic === guy6) {
        setPlayerTwoPic(guy7);
      } else if (playerTwoPic === guy7) {
        setPlayerTwoPic(guy8);
      } else if (playerTwoPic === guy8) {
        setPlayerTwoPic(guy9);
      } else if (playerTwoPic === guy9) {
        setPlayerTwoPic(guy10);
      } else if (playerTwoPic === guy10) {
        setPlayerTwoPic(guy11);
      } else if (playerTwoPic === guy11) {
        setPlayerTwoPic(guy12);
      } else if (playerTwoPic === guy12) {
        setPlayerTwoPic(guy13);
      } else if (playerTwoPic === guy13) {
        setPlayerTwoPic(guy14);
      } else if (playerTwoPic === guy14) {
        setPlayerTwoPic(guy15);
      } else if (playerTwoPic === guy15) {
        setPlayerTwoPic(guy16);
      }  else if (playerTwoPic === guy16) {
        setPlayerTwoPic(guy17);
      } else if (playerTwoPic === guy17) {
        setPlayerTwoPic(guy18);
      } else if (playerTwoPic === guy18) {
        setPlayerTwoPic(guy19);
      } else if (playerTwoPic === guy19) {
        setPlayerTwoPic(guy20);
      } else if (playerTwoPic === guy20) {
        setPlayerTwoPic(guy1);
      }
 
 
    } else {
      setIsHidden2(true);
    }



  }

  const [playerThreePic, setPlayerThreePic] = useState(guy11);


  const changeplayer3Icon = () => {
    // if(player3Value === 4) {
    //   setPlayer3Value(0);
    // } else {
    //   setPlayer3Value(player3Value + 3);
    // }
    if (isHidden3) {
      if (playerThreePic === guy1) {
        setPlayerThreePic(guy2);
      } else if (playerThreePic === guy2) {
        setPlayerThreePic(guy3);
      } else if (playerThreePic === guy3) {
        setPlayerThreePic(guy4);
      } else if (playerThreePic === guy4) {
        setPlayerThreePic(guy5);
      } else if (playerThreePic === guy5) {
        setPlayerThreePic(guy6);
      } else if (playerThreePic === guy6) {
        setPlayerThreePic(guy7);
      } else if (playerThreePic === guy7) {
        setPlayerThreePic(guy8);
      } else if (playerThreePic === guy8) {
        setPlayerThreePic(guy9);
      } else if (playerThreePic === guy9) {
        setPlayerThreePic(guy10);
      } else if (playerThreePic === guy10) {
        setPlayerThreePic(guy11);
      } else if (playerThreePic === guy11) {
        setPlayerThreePic(guy12);
      } else if (playerThreePic === guy12) {
        setPlayerThreePic(guy13);
      } else if (playerThreePic === guy13) {
        setPlayerThreePic(guy14);
      } else if (playerThreePic === guy14) {
        setPlayerThreePic(guy15);
      } else if (playerThreePic === guy15) {
        setPlayerThreePic(guy16);
      }  else if (playerThreePic === guy16) {
        setPlayerThreePic(guy17);
      } else if (playerThreePic === guy17) {
        setPlayerThreePic(guy18);
      } else if (playerThreePic === guy18) {
        setPlayerThreePic(guy19);
      } else if (playerThreePic === guy19) {
        setPlayerThreePic(guy20);
      } else if (playerThreePic === guy20) {
        setPlayerThreePic(guy1);
      }
 
 
    } else {
      setIsHidden3(true);
    }




  }

  const [playerFourPic, setPlayerFourPic] = useState(guy16);


  const changeplayer4Icon = () => {
    // if(player4Value === 4) {
    //   setPlayer4Value(0);
    // } else {
    //   setPlayer4Value(player4Value + 4);
    // }
    if (isHidden4) {
      if (playerFourPic === guy1) {
        setPlayerFourPic(guy2);
      } else if (playerFourPic === guy2) {
        setPlayerFourPic(guy3);
      } else if (playerFourPic === guy3) {
        setPlayerFourPic(guy4);
      } else if (playerFourPic === guy4) {
        setPlayerFourPic(guy5);
      } else if (playerFourPic === guy5) {
        setPlayerFourPic(guy6);
      } else if (playerFourPic === guy6) {
        setPlayerFourPic(guy7);
      } else if (playerFourPic === guy7) {
        setPlayerFourPic(guy8);
      } else if (playerFourPic === guy8) {
        setPlayerFourPic(guy9);
      } else if (playerFourPic === guy9) {
        setPlayerFourPic(guy10);
      } else if (playerFourPic === guy10) {
        setPlayerFourPic(guy11);
      } else if (playerFourPic === guy11) {
        setPlayerFourPic(guy12);
      } else if (playerFourPic === guy12) {
        setPlayerFourPic(guy13);
      } else if (playerFourPic === guy13) {
        setPlayerFourPic(guy14);
      } else if (playerFourPic === guy14) {
        setPlayerFourPic(guy15);
      } else if (playerFourPic === guy15) {
        setPlayerFourPic(guy16);
      }  else if (playerFourPic === guy16) {
        setPlayerFourPic(guy17);
      } else if (playerFourPic === guy17) {
        setPlayerFourPic(guy18);
      } else if (playerFourPic === guy18) {
        setPlayerFourPic(guy19);
      } else if (playerFourPic === guy19) {
        setPlayerFourPic(guy20);
      } else if (playerFourPic === guy20) {
        setPlayerFourPic(guy1);
      }
 
 
    } else {
      setIsHidden4(true);
    }



  }








  //points
  const [pointsTeamOne, setPointsTeamOne] = useState(0);
  const [pointsTeamTwo, setPointsTeamTwo] = useState(0);

  //cut off points Team 1
  const [OneCanScore20, setOneCanScore20] = useState(0);
  const [OneCanScore19, setOneCanScore19] = useState(0);
  const [OneCanScore18, setOneCanScore18] = useState(0);
  const [OneCanScore17, setOneCanScore17] = useState(0);
  const [OneCanScore16, setOneCanScore16] = useState(0);
  const [OneCanScore15, setOneCanScore15] = useState(0);
  const [OneCanScore25, setOneCanScore25] = useState(0);

  //cut off points Team 2
  const [TwoCanScore20, setTwoCanScore20] = useState(0);
  const [TwoCanScore19, setTwoCanScore19] = useState(0);
  const [TwoCanScore18, setTwoCanScore18] = useState(0);
  const [TwoCanScore17, setTwoCanScore17] = useState(0);
  const [TwoCanScore16, setTwoCanScore16] = useState(0);
  const [TwoCanScore15, setTwoCanScore15] = useState(0);
  const [TwoCanScore25, setTwoCanScore25] = useState(0);



  //20
  //Team 1
  const [imageOne20, setimageOne20] = useState(noMarks);
  const [clicksOne20, setclicksOne20] = useState(0);
  // Function to change the image source
  const changeImageTeamOne20 = () => {
    if (negativeMode === 0) {
      if (imageOne20 === noMarks) {
        setimageOne20(oneMarks);
        setclicksOne20(clicksOne20 + 1);
        setPtr(ptr + 1);
      } else if (imageOne20 === oneMarks) {
        setimageOne20(twoMarks)
        setclicksOne20(clicksOne20 + 1);
        setPtr(ptr + 1);
      } else if (imageOne20 === twoMarks) {
        setimageOne20(threeMarks);
        setclicksOne20(clicksOne20 + 1);
        setPtr(ptr + 1);
        setTwoCanScore20(1);

        var won = pointsTeamOne + '';
        var too = pointsTeamTwo + '';
        checkTeamOneWinnerOn20(won, too);


      } else if (imageOne20 == threeMarks) {
        if (OneCanScore20 === 0) {
          setPointsTeamOne(pointsTeamOne + 20);
          setclicksOne20(clicksOne20 + 1);
          setPtr(ptr + 1);
        }
        checkTeamOneWinnerOn20(pointsTeamOne + 20, pointsTeamTwo);
      }

    } else {
      if (imageOne20 === oneMarks) {
        setimageOne20(noMarks);
        if (clicksOne20 === 1) {
          setclicksOne20(clicksOne20 - 1);
          setPtr(ptr - 1);

        }
      } else if (imageOne20 === twoMarks) {
        setimageOne20(oneMarks);
        setclicksOne20(clicksOne20 - 1);
        setPtr(ptr - 1);

      } else if (imageOne20 === threeMarks && (clicksOne20 < 4)) {
        setimageOne20(twoMarks);
        setclicksOne20(clicksOne20 - 1);
        setPtr(ptr - 1);
        setTwoCanScore20(0);
      } else if (imageOne20 === threeMarks && (clicksOne20 >= 4)) {
        setPointsTeamOne(pointsTeamOne - 20);
        setclicksOne20(clicksOne20 - 1);
        setPtr(ptr - 1);
      }
    }
  }
  //Team 2
  const [imageTwo20, setimageTwo20] = useState(noMarks);
  const [readytoClose, setReadyToClose] = useState(0);
  const [clicksTwo20, setclicksTwo20] = useState(0);
  // Function to change the image source

  const changeImageTeamTwo20 = () => {
    if (negativeMode === 0) {

      if (imageTwo20 === noMarks) {
        setimageTwo20(oneMarks)
        setclicksTwo20(clicksTwo20 + 1);
        setPtr(ptr + 1);
      } else if (imageTwo20 === oneMarks) {
        setimageTwo20(twoMarks)
        setclicksTwo20(clicksTwo20 + 1);
        setPtr(ptr + 1);
        setReadyToClose(1);
      } else if (imageTwo20 === twoMarks) {
        setimageTwo20(threeMarks);


        setclicksTwo20(clicksTwo20 + 1);
        setOneCanScore20(1);
        setPtr(ptr + 1);


        var won = pointsTeamOne + '';
        var too = pointsTeamTwo + '';
        checkTeamTwoWinnerOn20(won, too);




      } else if (imageTwo20 === threeMarks) {

        if (TwoCanScore20 === 0) {
          setPointsTeamTwo(pointsTeamTwo + 20);
          setclicksTwo20(clicksTwo20 + 1);
          setPtr(ptr + 1);
          checkTeamTwoWinnerOn20(pointsTeamOne, pointsTeamTwo + 20);
        }



      }
    } else {
      if (imageTwo20 === oneMarks) {
        setimageTwo20(noMarks);
        if (clicksTwo20 === 1) {
          setclicksTwo20(clicksTwo20 - 1);
          setPtr(ptr - 1);
        }
      } else if (imageTwo20 === twoMarks) {
        setimageTwo20(oneMarks);
        setclicksTwo20(clicksTwo20 - 1);
        setPtr(ptr - 1);
      } else if (imageTwo20 === threeMarks && (clicksTwo20 < 4)) {
        setimageTwo20(twoMarks);
        setclicksTwo20(clicksTwo20 - 1);
        setPtr(ptr - 1);
        setOneCanScore20(0);
      } else if (imageTwo20 === threeMarks && (clicksTwo20 >= 4)) {
        setPointsTeamTwo(pointsTeamTwo - 20);
        setclicksTwo20(clicksTwo20 - 1);
        setPtr(ptr - 1);
      }
    }


  }

  //19
  //Team 1
  const [imageOne19, setimageOne19] = useState(noMarks);
  const [clicksOne19, setclicksOne19] = useState(0);
  // Function to change the image source
  const changeImageTeamOne19 = () => {
    if (negativeMode === 0) {

      if (imageOne19 === noMarks) {
        setimageOne19(oneMarks);
        setclicksOne19(clicksOne19 + 1);
        setPtr(ptr + 1);
      } else if (imageOne19 === oneMarks) {
        setimageOne19(twoMarks)
        setclicksOne19(clicksOne19 + 1);
        setPtr(ptr + 1);
      } else if (imageOne19 === twoMarks) {
        setimageOne19(threeMarks);
        setclicksOne19(clicksOne19 + 1);
        setPtr(ptr + 1);
        setTwoCanScore19(1);
        var won = pointsTeamOne + '';
        var too = pointsTeamTwo + '';
        checkTeamOneWinnerOn19(won, too);


      } else if (imageOne19 == threeMarks) {
        if (OneCanScore19 === 0) {
          setPointsTeamOne(pointsTeamOne + 19);
          setclicksOne19(clicksOne19 + 1);
          setPtr(ptr + 1);

        }
        checkTeamOneWinnerOn19(pointsTeamOne + 19, pointsTeamTwo);
      }

    } else {
      if (imageOne19 === oneMarks) {
        setimageOne19(noMarks);
        if (clicksOne19 === 1) {
          setclicksOne19(clicksOne19 - 1);
          setPtr(ptr - 1);
        }
      } else if (imageOne19 === twoMarks) {
        setimageOne19(oneMarks);
        setclicksOne19(clicksOne19 - 1);
        setPtr(ptr - 1);
      } else if (imageOne19 === threeMarks && (clicksOne19 < 4)) {
        setimageOne19(twoMarks);
        setclicksOne19(clicksOne19 - 1);
        setPtr(ptr - 1);
        setTwoCanScore19(0);
      } else if (imageOne19 === threeMarks && (clicksOne19 >= 4)) {
        setPointsTeamOne(pointsTeamOne - 19);
        setclicksOne19(clicksOne19 - 1);
        setPtr(ptr - 1);
      }
    }
  }
  //Team 2
  const [imageTwo19, setimageTwo19] = useState(noMarks);
  const [clicksTwo19, setclicksTwo19] = useState(0);
  // Function to change the image source


  const changeImageTeamTwo19 = () => {
    if (negativeMode === 0) {
      if (imageTwo19 === noMarks) {
        setimageTwo19(oneMarks)
        setclicksTwo19(clicksTwo19 + 1);
        setPtr(ptr + 1);
      } else if (imageTwo19 === oneMarks) {
        setimageTwo19(twoMarks)
        setclicksTwo19(clicksTwo19 + 1);
        setPtr(ptr + 1);
      } else if (imageTwo19 === twoMarks) {
        setimageTwo19(threeMarks)
        setclicksTwo19(clicksTwo19 + 1);

        setPtr(ptr + 1);
        setOneCanScore19(1);
        var won = pointsTeamOne + '';
        var too = pointsTeamTwo + '';
        checkTeamTwoWinnerOn19(won, too);

      } else if (imageTwo19 == threeMarks) {
        if (TwoCanScore19 === 0) {
          setPointsTeamTwo(pointsTeamTwo + 19);
          setclicksTwo19(clicksTwo19 + 1);
          setPtr(ptr + 1);



        }
        checkTeamTwoWinnerOn19(pointsTeamOne, pointsTeamTwo + 19);

      }
    } else {
      if (imageTwo19 === oneMarks) {
        setimageTwo19(noMarks);
        if (clicksTwo19 === 1) {
          setclicksTwo19(clicksTwo19 - 1);
          setPtr(ptr - 1);
        }
      } else if (imageTwo19 === twoMarks) {
        setimageTwo19(oneMarks);
        setclicksTwo19(clicksTwo19 - 1);
        setPtr(ptr - 1);
      } else if (imageTwo19 === threeMarks && (clicksTwo19 < 4)) {
        setimageTwo19(twoMarks);
        setclicksTwo19(clicksTwo19 - 1);
        setPtr(ptr - 1);
        setOneCanScore19(0);
      } else if (imageTwo19 === threeMarks && (clicksTwo19 >= 4)) {
        setPointsTeamTwo(pointsTeamTwo - 19);
        setclicksTwo19(clicksTwo19 - 1);
        setPtr(ptr - 1);
      }
    }


  }

  //18
  //Team 1
  const [imageOne18, setimageOne18] = useState(noMarks);
  const [clicksOne18, setclicksOne18] = useState(0);
  // Function to change the image source
  const changeImageTeamOne18 = () => {
    if (negativeMode === 0) {

      if (imageOne18 === noMarks) {
        setimageOne18(oneMarks);
        setclicksOne18(clicksOne18 + 1);
        setPtr(ptr + 1);
      } else if (imageOne18 === oneMarks) {
        setimageOne18(twoMarks)
        setclicksOne18(clicksOne18 + 1);
        setPtr(ptr + 1);
      } else if (imageOne18 === twoMarks) {
        setimageOne18(threeMarks);
        setclicksOne18(clicksOne18 + 1);
        setPtr(ptr + 1);
        setTwoCanScore18(1);
        var won = pointsTeamOne + '';
        var too = pointsTeamTwo + '';
        checkTeamOneWinnerOn18(won, too);

      } else if (imageOne18 == threeMarks) {
        if (OneCanScore18 === 0) {
          setPointsTeamOne(pointsTeamOne + 18);
          setclicksOne18(clicksOne18 + 1);
          setPtr(ptr + 1);

        }
        checkTeamOneWinnerOn18(pointsTeamOne + 18, pointsTeamTwo);
      }

    } else {
      if (imageOne18 === oneMarks) {
        setimageOne18(noMarks);
        if (clicksOne18 === 1) {
          setclicksOne18(clicksOne18 - 1);
          setPtr(ptr - 1);
        }
      } else if (imageOne18 === twoMarks) {
        setimageOne18(oneMarks);
        setclicksOne18(clicksOne18 - 1);
        setPtr(ptr - 1);
      } else if (imageOne18 === threeMarks && (clicksOne18 < 4)) {
        setimageOne18(twoMarks);
        setclicksOne18(clicksOne18 - 1);
        setPtr(ptr - 1);
        setTwoCanScore18(0);
      } else if (imageOne18 === threeMarks && (clicksOne18 >= 4)) {
        setPointsTeamOne(pointsTeamOne - 18);
        setclicksOne18(clicksOne18 - 1);
        setPtr(ptr - 1);
      }
    }
  }
  //Team 2
  const [imageTwo18, setimageTwo18] = useState(noMarks);
  const [clicksTwo18, setclicksTwo18] = useState(0);
  // Function to change the image source


  const changeImageTeamTwo18 = () => {
    if (negativeMode === 0) {

      if (imageTwo18 === noMarks) {
        setimageTwo18(oneMarks)
        setclicksTwo18(clicksTwo18 + 1);
        setPtr(ptr + 1);
      } else if (imageTwo18 === oneMarks) {
        setimageTwo18(twoMarks)
        setclicksTwo18(clicksTwo18 + 1);
        setPtr(ptr + 1);
      } else if (imageTwo18 === twoMarks) {
        setimageTwo18(threeMarks)
        setclicksTwo18(clicksTwo18 + 1);
        setPtr(ptr + 1);
        setOneCanScore18(1);
        var won = pointsTeamOne + '';
        var too = pointsTeamTwo + '';
        checkTeamTwoWinnerOn18(won, too);


      } else if (imageTwo18 == threeMarks) {
        if (TwoCanScore18 === 0) {
          setPointsTeamTwo(pointsTeamTwo + 18);
          setclicksTwo18(clicksTwo18 + 1);
          setPtr(ptr + 1);

        }
        checkTeamTwoWinnerOn18(pointsTeamOne, pointsTeamTwo + 18);

      }
    } else {
      if (imageTwo18 === oneMarks) {
        setimageTwo18(noMarks);
        if (clicksTwo18 === 1) {
          setclicksTwo18(clicksTwo18 - 1);
          setPtr(ptr - 1);
        }
      } else if (imageTwo18 === twoMarks) {
        setimageTwo18(oneMarks);
        setclicksTwo18(clicksTwo18 - 1);
        setPtr(ptr - 1);
      } else if (imageTwo18 === threeMarks && (clicksTwo18 < 4)) {
        setimageTwo18(twoMarks);
        setclicksTwo18(clicksTwo18 - 1);
        setPtr(ptr - 1);
        setOneCanScore18(0);
      } else if (imageTwo18 === threeMarks && (clicksTwo18 >= 4)) {
        setPointsTeamTwo(pointsTeamTwo - 18);
        setclicksTwo18(clicksTwo18 - 1);
        setPtr(ptr - 1);
      }
    }


  }

  //17
  //Team 1
  const [imageOne17, setimageOne17] = useState(noMarks);
  const [clicksOne17, setclicksOne17] = useState(0);
  // Function to change the image source
  const changeImageTeamOne17 = () => {
    if (negativeMode === 0) {

      if (imageOne17 === noMarks) {
        setimageOne17(oneMarks);
        setclicksOne17(clicksOne17 + 1);
        setPtr(ptr + 1);
      } else if (imageOne17 === oneMarks) {
        setimageOne17(twoMarks)
        setclicksOne17(clicksOne17 + 1);
        setPtr(ptr + 1);
      } else if (imageOne17 === twoMarks) {
        setimageOne17(threeMarks);
        setclicksOne17(clicksOne17 + 1);
        setPtr(ptr + 1);
        setTwoCanScore17(1);
        var won = pointsTeamOne + '';
        var too = pointsTeamTwo + '';
        checkTeamOneWinnerOn17(won, too);


      } else if (imageOne17 == threeMarks) {
        if (OneCanScore17 === 0) {
          setPointsTeamOne(pointsTeamOne + 17);
          setclicksOne17(clicksOne17 + 1);
          setPtr(ptr + 1);

        }
        checkTeamOneWinnerOn17(pointsTeamOne + 17, pointsTeamTwo);
      }

    } else {
      if (imageOne17 === oneMarks) {
        setimageOne17(noMarks);
        if (clicksOne17 === 1) {
          setclicksOne17(clicksOne17 - 1);
          setPtr(ptr - 1);
        }
      } else if (imageOne17 === twoMarks) {
        setimageOne17(oneMarks);
        setclicksOne17(clicksOne17 - 1);
        setPtr(ptr - 1);
      } else if (imageOne17 === threeMarks && (clicksOne17 < 4)) {
        setimageOne17(twoMarks);
        setclicksOne17(clicksOne17 - 1);
        setPtr(ptr - 1);
        setTwoCanScore17(0);
      } else if (imageOne17 === threeMarks && (clicksOne17 >= 4)) {
        setPointsTeamOne(pointsTeamOne - 17);
        setclicksOne17(clicksOne17 - 1);
        setPtr(ptr - 1);
      }
    }
  }
  //Team 2
  const [imageTwo17, setimageTwo17] = useState(noMarks);
  const [clicksTwo17, setclicksTwo17] = useState(0);
  // Function to change the image source


  const changeImageTeamTwo17 = () => {
    if (negativeMode === 0) {

      if (imageTwo17 === noMarks) {
        setimageTwo17(oneMarks)
        setclicksTwo17(clicksTwo17 + 1);
        setPtr(ptr + 1);
      } else if (imageTwo17 === oneMarks) {
        setimageTwo17(twoMarks)
        setclicksTwo17(clicksTwo17 + 1);
        setPtr(ptr + 1);
      } else if (imageTwo17 === twoMarks) {
        setimageTwo17(threeMarks)
        setclicksTwo17(clicksTwo17 + 1);
        setPtr(ptr + 1);
        setOneCanScore17(1);
        var won = pointsTeamOne + '';
        var too = pointsTeamTwo + '';
        checkTeamTwoWinnerOn17(won, too);


      } else if (imageTwo17 == threeMarks) {
        if (TwoCanScore17 === 0) {
          setPointsTeamTwo(pointsTeamTwo + 17);
          setclicksTwo17(clicksTwo17 + 1);
          setPtr(ptr + 1);

        }
        checkTeamTwoWinnerOn17(pointsTeamOne, pointsTeamTwo + 17);
      }
    } else {
      if (imageTwo17 === oneMarks) {
        setimageTwo17(noMarks);
        if (clicksTwo17 === 1) {
          setclicksTwo17(clicksTwo17 - 1);
          setPtr(ptr - 1);
        }
      } else if (imageTwo17 === twoMarks) {
        setimageTwo17(oneMarks);
        setclicksTwo17(clicksTwo17 - 1);
        setPtr(ptr - 1);
      } else if (imageTwo17 === threeMarks && (clicksTwo17 < 4)) {
        setimageTwo17(twoMarks);
        setclicksTwo17(clicksTwo17 - 1);
        setPtr(ptr - 1);
        setOneCanScore17(0);
      } else if (imageTwo17 === threeMarks && (clicksTwo17 >= 4)) {
        setPointsTeamTwo(pointsTeamTwo - 17);
        setclicksTwo17(clicksTwo17 - 1);
        setPtr(ptr - 1);
      }
    }


  }

  //16
  //Team 1
  const [imageOne16, setimageOne16] = useState(noMarks);
  const [clicksOne16, setclicksOne16] = useState(0);
  // Function to change the image source
  const changeImageTeamOne16 = () => {
    if (negativeMode === 0) {

      if (imageOne16 === noMarks) {
        setimageOne16(oneMarks);
        setclicksOne16(clicksOne16 + 1);
        setPtr(ptr + 1);
      } else if (imageOne16 === oneMarks) {
        setimageOne16(twoMarks)
        setclicksOne16(clicksOne16 + 1);
        setPtr(ptr + 1);
      } else if (imageOne16 === twoMarks) {
        setimageOne16(threeMarks);
        setclicksOne16(clicksOne16 + 1);
        setPtr(ptr + 1);
        setTwoCanScore16(1);
        var won = pointsTeamOne + '';
        var too = pointsTeamTwo + '';
        checkTeamOneWinnerOn16(won, too);


      } else if (imageOne16 == threeMarks) {
        if (OneCanScore16 === 0) {
          setPointsTeamOne(pointsTeamOne + 16);
          setclicksOne16(clicksOne16 + 1);
          setPtr(ptr + 1);

        }
        checkTeamOneWinnerOn16(pointsTeamOne + 16, pointsTeamTwo);
      }

    } else {
      if (imageOne16 === oneMarks) {
        setimageOne16(noMarks);
        if (clicksOne16 === 1) {
          setclicksOne16(clicksOne16 - 1);
          setPtr(ptr - 1);
        }
      } else if (imageOne16 === twoMarks) {
        setimageOne16(oneMarks);
        setclicksOne16(clicksOne16 - 1);
        setPtr(ptr - 1);
      } else if (imageOne16 === threeMarks && (clicksOne16 < 4)) {
        setimageOne16(twoMarks);
        setclicksOne16(clicksOne16 - 1);
        setPtr(ptr - 1);
        setTwoCanScore16(0);
      } else if (imageOne16 === threeMarks && (clicksOne16 >= 4)) {
        setPointsTeamOne(pointsTeamOne - 16);
        setclicksOne16(clicksOne16 - 1);
        setPtr(ptr - 1);
      }
    }
  }
  //Team 2
  const [imageTwo16, setimageTwo16] = useState(noMarks);
  const [clicksTwo16, setclicksTwo16] = useState(0);
  // Function to change the image source


  const changeImageTeamTwo16 = () => {
    if (negativeMode === 0) {

      if (imageTwo16 === noMarks) {
        setimageTwo16(oneMarks)
        setclicksTwo16(clicksTwo16 + 1);
        setPtr(ptr + 1);
      } else if (imageTwo16 === oneMarks) {
        setimageTwo16(twoMarks)
        setclicksTwo16(clicksTwo16 + 1);
        setPtr(ptr + 1);
      } else if (imageTwo16 === twoMarks) {
        setimageTwo16(threeMarks)
        setclicksTwo16(clicksTwo16 + 1);
        setPtr(ptr + 1);
        setOneCanScore16(1);
        var won = pointsTeamOne + '';
        var too = pointsTeamTwo + '';
        checkTeamTwoWinnerOn16(won, too);


      } else if (imageTwo16 == threeMarks) {
        if (TwoCanScore16 === 0) {
          setPointsTeamTwo(pointsTeamTwo + 16);
          setclicksTwo16(clicksTwo16 + 1);
          setPtr(ptr + 1);

        }
        checkTeamTwoWinnerOn16(pointsTeamOne, pointsTeamTwo + 16);
      }
    } else {
      if (imageTwo16 === oneMarks) {
        setimageTwo16(noMarks);
        if (clicksTwo16 === 1) {
          setclicksTwo16(clicksTwo16 - 1);
          setPtr(ptr - 1);
        }
      } else if (imageTwo16 === twoMarks) {
        setimageTwo16(oneMarks);
        setclicksTwo16(clicksTwo16 - 1);
        setPtr(ptr - 1);
      } else if (imageTwo16 === threeMarks && (clicksTwo16 < 4)) {
        setimageTwo16(twoMarks);
        setclicksTwo16(clicksTwo16 - 1);
        setPtr(ptr - 1);
        setOneCanScore16(0);
      } else if (imageTwo16 === threeMarks && (clicksTwo16 >= 4)) {
        setPointsTeamTwo(pointsTeamTwo - 16);
        setclicksTwo16(clicksTwo16 - 1);
        setPtr(ptr - 1);
      }
    }


  }


  //15
  //Team 1
  const [imageOne15, setimageOne15] = useState(noMarks);
  const [clicksOne15, setclicksOne15] = useState(0);
  // Function to change the image source
  const changeImageTeamOne15 = () => {
    if (negativeMode === 0) {

      if (imageOne15 === noMarks) {
        setimageOne15(oneMarks);
        setclicksOne15(clicksOne15 + 1);
        setPtr(ptr + 1);
      } else if (imageOne15 === oneMarks) {
        setimageOne15(twoMarks)
        setclicksOne15(clicksOne15 + 1);
        setPtr(ptr + 1);
      } else if (imageOne15 === twoMarks) {
        setimageOne15(threeMarks);
        setclicksOne15(clicksOne15 + 1);
        setPtr(ptr + 1);
        setTwoCanScore15(1);
        var won = pointsTeamOne + '';
        var too = pointsTeamTwo + '';
        checkTeamOneWinnerOn15(won, too);


      } else if (imageOne15 == threeMarks) {
        if (OneCanScore15 === 0) {
          setPointsTeamOne(pointsTeamOne + 15);
          setclicksOne15(clicksOne15 + 1);
          setPtr(ptr + 1);

        }
        checkTeamOneWinnerOn15(pointsTeamOne + 15, pointsTeamTwo);
      }

    } else {
      if (imageOne15 === oneMarks) {
        setimageOne15(noMarks);
        if (clicksOne15 === 1) {
          setclicksOne15(clicksOne15 - 1);
          setPtr(ptr - 1);
        }
      } else if (imageOne15 === twoMarks) {
        setimageOne15(oneMarks);
        setclicksOne15(clicksOne15 - 1);
        setPtr(ptr - 1);
      } else if (imageOne15 === threeMarks && (clicksOne15 < 4)) {
        setimageOne15(twoMarks);
        setclicksOne15(clicksOne15 - 1);
        setPtr(ptr - 1);
        setTwoCanScore15(0);
      } else if (imageOne15 === threeMarks && (clicksOne15 >= 4)) {
        setPointsTeamOne(pointsTeamOne - 15);
        setclicksOne15(clicksOne15 - 1);
        setPtr(ptr - 1);
      }
    }
  }
  //Team 2
  const [imageTwo15, setimageTwo15] = useState(noMarks);
  const [clicksTwo15, setclicksTwo15] = useState(0);
  // Function to change the image source


  const changeImageTeamTwo15 = () => {
    if (negativeMode === 0) {

      if (imageTwo15 === noMarks) {
        setimageTwo15(oneMarks)
        setclicksTwo15(clicksTwo15 + 1);
        setPtr(ptr + 1);
      } else if (imageTwo15 === oneMarks) {
        setimageTwo15(twoMarks)
        setclicksTwo15(clicksTwo15 + 1);
        setPtr(ptr + 1);
      } else if (imageTwo15 === twoMarks) {
        setimageTwo15(threeMarks)
        setclicksTwo15(clicksTwo15 + 1);
        setPtr(ptr + 1);
        setOneCanScore15(1);
        var won = pointsTeamOne + '';
        var too = pointsTeamTwo + '';
        checkTeamTwoWinnerOn15(won, too);


      } else if (imageTwo15 == threeMarks) {
        if (TwoCanScore15 === 0) {
          setPointsTeamTwo(pointsTeamTwo + 15);
          setclicksTwo15(clicksTwo15 + 1);
          setPtr(ptr + 1);

        }
        checkTeamTwoWinnerOn15(pointsTeamOne, pointsTeamTwo + 15);
      }
    } else {
      if (imageTwo15 === oneMarks) {
        setimageTwo15(noMarks);
        if (clicksTwo15 === 1) {
          setclicksTwo15(clicksTwo15 - 1);
          setPtr(ptr - 1);
        }
      } else if (imageTwo15 === twoMarks) {
        setimageTwo15(oneMarks);
        setclicksTwo15(clicksTwo15 - 1);
        setPtr(ptr - 1);
      } else if (imageTwo15 === threeMarks && (clicksTwo15 < 4)) {
        setimageTwo15(twoMarks);
        setclicksTwo15(clicksTwo15 - 1);
        setPtr(ptr - 1);
        setOneCanScore15(0);
      } else if (imageTwo15 === threeMarks && (clicksTwo15 >= 4)) {
        setPointsTeamTwo(pointsTeamTwo - 15);
        setclicksTwo15(clicksTwo15 - 1);
        setPtr(ptr - 1);
      }
    }


  }

  //25
  //Team 1
  const [imageOne25, setimageOne25] = useState(noMarks);
  const [clicksOne25, setclicksOne25] = useState(0);
  // Function to change the image source
  const changeImageTeamOne25 = () => {
    if (negativeMode === 0) {

      if (imageOne25 === noMarks) {
        setimageOne25(oneMarks);
        setclicksOne25(clicksOne25 + 1);
        setPtr(ptr + 1);
      } else if (imageOne25 === oneMarks) {
        setimageOne25(twoMarks)
        setclicksOne25(clicksOne25 + 1);
        setPtr(ptr + 1);
      } else if (imageOne25 === twoMarks) {
        setimageOne25(threeMarks);
        setclicksOne25(clicksOne25 + 1);
        setPtr(ptr + 1);
        setTwoCanScore25(1);
        var won = pointsTeamOne + '';
        var too = pointsTeamTwo + '';
        checkTeamOneWinnerOn25(won, too);


      } else if (imageOne25 == threeMarks) {
        if (OneCanScore25 === 0) {
          setPointsTeamOne(pointsTeamOne + 25);
          setclicksOne25(clicksOne25 + 1);
          setPtr(ptr + 1);

        }
        checkTeamOneWinnerOn25(pointsTeamOne + 25, pointsTeamTwo);

      }

    } else {
      if (imageOne25 === oneMarks) {
        setimageOne25(noMarks);
        if (clicksOne25 === 1) {
          setclicksOne25(clicksOne25 - 1);
          setPtr(ptr - 1);
        }
      } else if (imageOne25 === twoMarks) {
        setimageOne25(oneMarks);
        setclicksOne25(clicksOne25 - 1);
        setPtr(ptr - 1);
      } else if (imageOne25 === threeMarks && (clicksOne25 < 4)) {
        setimageOne25(twoMarks);
        setclicksOne25(clicksOne25 - 1);
        setPtr(ptr - 1);
        setTwoCanScore25(0);
      } else if (imageOne25 === threeMarks && (clicksOne25 >= 4)) {
        setPointsTeamOne(pointsTeamOne - 25);
        setclicksOne25(clicksOne25 - 1);
        setPtr(ptr - 1);
      }
    }
  }
  //Team 2
  const [imageTwo25, setimageTwo25] = useState(noMarks);
  const [clicksTwo25, setclicksTwo25] = useState(0);
  // Function to change the image source


  const changeImageTeamTwo25 = () => {
    if (negativeMode === 0) {

      if (imageTwo25 === noMarks) {
        setimageTwo25(oneMarks)
        setclicksTwo25(clicksTwo25 + 1);
        setPtr(ptr + 1);
      } else if (imageTwo25 === oneMarks) {
        setimageTwo25(twoMarks)
        setclicksTwo25(clicksTwo25 + 1);
        setPtr(ptr + 1);
      } else if (imageTwo25 === twoMarks) {
        setimageTwo25(threeMarks)
        setclicksTwo25(clicksTwo25 + 1);
        setPtr(ptr + 1);
        setOneCanScore25(1);
        var won = pointsTeamOne + '';
        var too = pointsTeamTwo + '';
        checkTeamTwoWinnerOn25(won, too);


      } else if (imageTwo25 == threeMarks) {
        if (TwoCanScore25 === 0) {
          setPointsTeamTwo(pointsTeamTwo + 25);
          setclicksTwo25(clicksTwo25 + 1);
          setPtr(ptr + 1);
        }

        checkTeamTwoWinnerOn25(pointsTeamOne, pointsTeamTwo + 25);
      }
    } else {
      if (imageTwo25 === oneMarks) {
        setimageTwo25(noMarks);
        if (clicksTwo25 === 1) {
          setclicksTwo25(clicksTwo25 - 1);
          setPtr(ptr - 1);
        }
      } else if (imageTwo25 === twoMarks) {
        setimageTwo25(oneMarks);
        setclicksTwo25(clicksTwo25 - 1);
        setPtr(ptr - 1);
      } else if (imageTwo25 === threeMarks && (clicksTwo25 < 4)) {
        setimageTwo25(twoMarks);
        setclicksTwo25(clicksTwo25 - 1);
        setPtr(ptr - 1);
        setOneCanScore25(0);
      } else if (imageTwo25 === threeMarks && (clicksTwo25 >= 4)) {
        setPointsTeamTwo(pointsTeamTwo - 25);
        setclicksTwo25(clicksTwo25 - 1);
        setPtr(ptr - 1);
      }
    }
  }


  //Swap game type
  const [TwovTwoMode, setTwovTwoMode] = useState(0);
  const [totalPlayersTitle, setTotalPlayersTitle] = useState("Make 1 V 1");
  const [playerThreeAndFourVisible, setPlayerThreeAndFourVisible] = useState("");

  const swapGme = () => {
    if (TwovTwoMode === 0) {
      setTwovTwoMode(1);
      setPlayerThreeAndFourVisible("hidden");
      setTotalPlayersTitle("Make 2 V 2")

    } else {
      setTwovTwoMode(0);
      setPlayerThreeAndFourVisible("");
      setTotalPlayersTitle("Make 1 V 1")

    }
  }


  //Turn
  const [playerOneUp, setplayerOneUp] = useState('green');
  const [playerTwoUp, setplayerTwoUp] = useState('red');
  const [playerThreeUp, setplayerThreeUp] = useState('red');
  const [playerFourUp, setplayerFourUp] = useState('red');

  //MPRs
  const [playerOneMPR, setplayerOneMPR] = useState(0.0);
  const [playerTwoMPR, setplayerTwoMPR] = useState(0.0);
  const [playerThreeMPR, setplayerThreeMPR] = useState(0.0);
  const [playerFourMPR, setplayerFourMPR] = useState(0.0);



  //totals
  const [roundsPlayed, setRoundsPlayed] = useState(1.0);
  const [roundsPlayedAll, setRoundsPlayedAll] = useState(1.0);
  const [playerOneTotalHits, setPlayerOneTotalHits,] = useState(0.0);
  const [playerTwoTotalHits, setPlayerTwoTotalHits,] = useState(0.0);
  const [playerThreeTotalHits, setPlayerThreeTotalHits,] = useState(0.0);
  const [playerFourTotalHits, setPlayerFourTotalHits,] = useState(0.0);

  //current round tracking
  const [ptr, setPtr] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const nextPlayerUp = () => {
    if (currentPlayer === 1) {
      let total = playerOneTotalHits + ptr;
      setPlayerOneTotalHits(total);
      let current = total / roundsPlayed;

      var display = '' + current;

      if (display.length >= 5) {
        display = display.substring(0, 5);
      }

      setplayerOneMPR(display);

      setPtr(0);
      setCurrentPlayer(3);
      setplayerOneUp('red');
      setplayerThreeUp('green');
    } else if (currentPlayer === 2) {

      let total = playerTwoTotalHits + ptr;
      setPlayerTwoTotalHits(total);
      let current = total / roundsPlayedAll;


      var display = '' + current;

      if (display.length >= 5) {
        display = display.substring(0, 5);
      }
      setplayerTwoMPR(display);

      setPtr(0);
      setCurrentPlayer(4);
      setplayerTwoUp('red');
      setplayerFourUp('green');


    } else if (currentPlayer == 3) {
      let total = playerThreeTotalHits + ptr;
      setPlayerThreeTotalHits(total);
      let current = total / roundsPlayed;

      var display = '' + current;

      if (display.length >= 5) {
        display = display.substring(0, 5);
      }
      setplayerThreeMPR(display);

      setPtr(0);
      if (TwovTwoMode === 0) {
        setCurrentPlayer(2);
        setplayerTwoUp('green');
      } else {
        setCurrentPlayer(1);
        setplayerOneUp('green');
        setRoundsPlayed(roundsPlayed + 1);
      }
      setplayerThreeUp('red');

    } else if (currentPlayer == 4) {
      let total = playerFourTotalHits + ptr;
      setPlayerFourTotalHits(total);
      let current = total / roundsPlayedAll;
      var display = '' + current;

      if (display.length >= 5) {
        display = display.substring(0, 5);
      }
      setplayerFourMPR(display);


      setPtr(0);
      setCurrentPlayer(1);
      setplayerFourUp('red');
      setplayerOneUp('green');
      setRoundsPlayed(roundsPlayed + 1);
      setRoundsPlayedAll(roundsPlayedAll + 1);

    }
  }

  const [open, setOpen] = React.useState(false);
  const [winner, setWinner] = useState('?');
  const checkTeamTwoWinnerOn20 = (o, t) => {
    var num1 = parseInt(o);
    var num2 = parseInt(t);
    if (num2 > num1 && clicksTwo15 >= 3 && clicksTwo16 >= 3 && clicksTwo17 >= 3 && clicksTwo18 >= 3 && clicksTwo19 >= 3 && clicksTwo25 >= 3) {
      setWinner('2');
      setOpen(true);
    }
  }

  const checkTeamTwoWinnerOn19 = (o, t) => {
    var num1 = parseInt(o);
    var num2 = parseInt(t);
    if (num2 > num1 && clicksTwo15 >= 3 && clicksTwo16 >= 3 && clicksTwo17 >= 3 && clicksTwo18 >= 3 && clicksTwo20 >= 3 && clicksTwo25 >= 3) {
      setWinner('2');
      setOpen(true);
    }
  }

  const checkTeamTwoWinnerOn18 = (o, t) => {
    var num1 = parseInt(o);
    var num2 = parseInt(t);
    if (num2 > num1 && clicksTwo15 >= 3 && clicksTwo16 >= 3 && clicksTwo17 >= 3 && clicksTwo19 >= 3 && clicksTwo20 >= 3 && clicksTwo25 >= 3) {
      setWinner('2');
      setOpen(true);
    }
  }

  const checkTeamTwoWinnerOn17 = (o, t) => {
    var num1 = parseInt(o);
    var num2 = parseInt(t);
    if (num2 > num1 && clicksTwo15 >= 3 && clicksTwo16 >= 3 && clicksTwo18 >= 3 && clicksTwo19 >= 3 && clicksTwo20 >= 3 && clicksTwo25 >= 3) {
      setWinner('2');
      setOpen(true);
    }
  }

  const checkTeamTwoWinnerOn16 = (o, t) => {
    var num1 = parseInt(o);
    var num2 = parseInt(t);
    if (num2 > num1 && clicksTwo15 >= 3 && clicksTwo17 >= 3 && clicksTwo18 >= 3 && clicksTwo19 >= 3 && clicksTwo20 >= 3 && clicksTwo25 >= 3) {
      setWinner('2');
      setOpen(true);
    }
  }

  const checkTeamTwoWinnerOn15 = (o, t) => {
    var num1 = parseInt(o);
    var num2 = parseInt(t);
    if (num2 > num1 && clicksTwo16 >= 3 && clicksTwo17 >= 3 && clicksTwo18 >= 3 && clicksTwo19 >= 3 && clicksTwo20 >= 3 && clicksTwo25 >= 3) {
      setWinner('2');
      setOpen(true);
    }
  }

  const checkTeamTwoWinnerOn25 = (o, t) => {
    var num1 = parseInt(o);
    var num2 = parseInt(t);
    if (num2 > num1 && clicksTwo16 >= 3 && clicksTwo17 >= 3 && clicksTwo18 >= 3 && clicksTwo19 >= 3 && clicksTwo20 >= 3 && clicksTwo15 >= 3) {
      setWinner('2');
      setOpen(true);
    }
  }


  //team one
  const checkTeamOneWinnerOn20 = (o, t) => {
    var num1 = parseInt(o);
    var num2 = parseInt(t);
    if (num2 < num1 && clicksOne15 >= 3 && clicksOne16 >= 3 && clicksOne17 >= 3 && clicksOne18 >= 3 && clicksOne19 >= 3 && clicksOne25 >= 3) {
      setWinner('1');
      setOpen(true);
    }
  }


  const checkTeamOneWinnerOn19 = (o, t) => {
    var num1 = parseInt(o);
    var num2 = parseInt(t);
    if (num2 < num1 && clicksOne15 >= 3 && clicksOne16 >= 3 && clicksOne17 >= 3 && clicksOne18 >= 3 && clicksOne20 >= 3 && clicksOne25 >= 3) {
      setWinner('1');
      setOpen(true);
    }
  }


  const checkTeamOneWinnerOn18 = (o, t) => {
    var num1 = parseInt(o);
    var num2 = parseInt(t);
    if (num2 < num1 && clicksOne15 >= 3 && clicksOne16 >= 3 && clicksOne17 >= 3 && clicksOne19 >= 3 && clicksOne20 >= 3 && clicksOne25 >= 3) {
      setWinner('1');
      setOpen(true);
    }
  }


  const checkTeamOneWinnerOn17 = (o, t) => {
    var num1 = parseInt(o);
    var num2 = parseInt(t);
    if (num2 < num1 && clicksOne15 >= 3 && clicksOne16 >= 3 && clicksOne18 >= 3 && clicksOne19 >= 3 && clicksOne20 >= 3 && clicksOne25 >= 3) {
      setWinner('1');
      setOpen(true);
    }
  }


  const checkTeamOneWinnerOn16 = (o, t) => {
    var num1 = parseInt(o);
    var num2 = parseInt(t);
    if (num2 < num1 && clicksOne15 >= 3 && clicksOne17 >= 3 && clicksOne18 >= 3 && clicksOne19 >= 3 && clicksOne20 >= 3 && clicksOne25 >= 3) {
      setWinner('1');
      setOpen(true);
    }
  }


  const checkTeamOneWinnerOn15 = (o, t) => {
    var num1 = parseInt(o);
    var num2 = parseInt(t);
    if (num2 < num1 && clicksOne16 >= 3 && clicksOne17 >= 3 && clicksOne18 >= 3 && clicksOne19 >= 3 && clicksOne20 >= 3 && clicksOne25 >= 3) {
      setWinner('1');
      setOpen(true);
    }
  }


  const checkTeamOneWinnerOn25 = (o, t) => {
    var num1 = parseInt(o);
    var num2 = parseInt(t);
    if (num2 < num1 && clicksOne16 >= 3 && clicksOne17 >= 3 && clicksOne18 >= 3 && clicksOne19 >= 3 && clicksOne20 >= 3 && clicksOne15 >= 3) {
      setWinner('1');
      setOpen(true);
    }
  }










  const handleClose = () => {
    setOpen(false);
  };

  const refreshView = () => {
    window.location.reload(false);
  };


  
  if(isMobile) {
    return (

      <div style={{marginTop:"3%"}} className="gameMobile">


        <Box>
          <Dialog
            open={open}>
            <DialogTitle class="alertText">Game Over
            </DialogTitle>
            <DialogContent>
              <DialogContentText class="alertBody">
                Team {winner} has won the Game!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={handleClose} >
                CLOSE
              </Button>
              <Button variant="contained" onClick={refreshView}>
                RESTART
              </Button>
            </DialogActions>


          </Dialog>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box sx={{ width: '100%', height: (windowHeight / 10) * 1.25 }}><h1 class="pointsText" style={{ fontSize: ((windowHeight / 20) + 'px') }} >Points</h1><h2 class="pointsNumber" style={{ fontSize: ((windowHeight / 20) + 'px') }}>{pointsTeamOne} </h2></Box>
            </Grid>
            <Grid item xs={4} spacing={5}>
              <Box sx={{ height: (windowHeight / 10) * 1.25 }}> <h1 class="vsText" style={{ fontSize: ((windowHeight / 12) + 'px') }}>VS</h1></Box>
            </Grid>
            <Grid item xs={4}  >
              <Box sx={{ width: '100%', height: (windowHeight / 10) * 1.25 }}><h1 class="pointsText" style={{ fontSize: ((windowHeight / 20) + 'px') }}>Points</h1><h2 class="pointsNumber" style={{ fontSize: ((windowHeight / 20) + 'px') }}>{pointsTeamTwo} </h2></Box>
            </Grid>
            <Grid item xs={4} border={0} borderColor="blue" spacing={2} >
              <Box sx={{ height: (windowHeight / 10) * 7 }}> <Box sx={{ width: '100%', height: (windowHeight / 10) * 3.3 }} border={6} borderColor={playerOneUp} borderRadius="6%"><Grid container>
                <Grid item xs={6}>
                  <Box style={{}} sx={{ width: '100%', marginLeft: "5%", height: (windowHeight / 10) * 2 }} >
                    {isHidden ? <img style={{ marginTop: ((windowHeight / 100) + '%') }} src={playerOnePic} class="guy"></img> : (

                      <div >
                        {img === null ? (
                          <div style={{ marginTop: "5%",  }}>
                            <Webcam
                              audio={false}
                              mirrored={false}
                              facingMode= "user"
                              height={((windowHeight / 6.25) + 'px')}
                              width={((windowWidth / 7.5) + 'px')}
                              ref={webcamRef}
                              screenshotFormat="image/jpeg"
                              videoConstraints={videoConstraints}
                            />

                            <Button  variant="contained" color="success" style={{marginBottom: ((windowHeight / 100) * 3) + '%', marginTop:  ((windowHeight / 100) * 1) + '%', height: ((windowHeight / 20) + 'px'), width: "190%" }} onClick={capture}>Take photo</Button>
                          </div>
                        ) : (
                          <>
                            <img style={{ marginTop: "5%", height: ((windowHeight / 6.25) + 'px'), width: ((windowWidth / 7.5) + 'px') }} src={img} alt="screenshot" />
                            <Button  variant="contained" color="error" style={{marginBottom: ((windowHeight / 100) * 1) + '%', marginTop:  ((windowHeight / 100) * 1) + '%', height: ((windowHeight / 20) + 'px'), width: "190%" }} onClick={() => setImg(null)}>Retake</Button>

                          </>
                        )}

                      </div>
                    )}
                    
                  </Box>
                </Grid>
                <Grid item xs={6} >
                  <Box sx={{ width: '100%', height: (windowHeight / 10) * 1 }}><p style={{ fontSize: (((windowWidth * windowHeight) / 20000) + 'px'), marginBottom: (('-' + (windowWidth * windowHeight) / 65000) + '%'), color: 'white', textAlign: 'center', marginTop: ((windowHeight / 50) + 'px') }}>
                    MPR
                  </p><p style={{ fontSize: (((windowWidth * windowHeight) / 23000) + 'px'), color: 'white', textAlign: 'center' }}>
                      {playerOneMPR}
                    </p>
                    
                    
                    </Box>
                    
                </Grid>
               
              </Grid>
              <Box style={{marginTop:  (windowHeight / 60) + '%'}} item xs={12}><div>
                  <div align='center' style={{ display: 'flex', height: (windowHeight / 11) + '%' }}> <img style={{maxHeight: (((windowHeight / 100) * 7) + 'px') ,width: ((windowWidth / 100) * 8.5) + 'px'}} align='center' src={rotatePic} onClick={changeplayer1Icon} class="rotButton"></img> <img style={{maxHeight: (((windowHeight / 100) * 7) + 'px'),  width: ((windowWidth / 100) * 8.5) + 'px'}} align='center'  src={cameraPic} onClick={toggleImageVisibility} class="rotButton"></img></div>
                  </div></Box>
              </Box>

              <Box hidden={playerThreeAndFourVisible} sx={{ width: '100%', height: (windowHeight / 10) * 3.3 }} border={6} borderColor={playerTwoUp} borderRadius="6%"><Grid container>
               <Grid item xs={6}>
                 <Box style={{}} sx={{ width: '100%', marginLeft: "5%", height: (windowHeight / 10) * 2 }} >
                   {isHidden2 ? <img style={{ marginTop: ((windowHeight / 100) + '%') }} src={playerTwoPic} class="guy"></img> : (


                     <div >
                       {img2 === null ? (
                         <div style={{ marginTop: "5%",  }}>
                           <Webcam
                             audio={false}
                             mirrored={false}
                             facingMode= "user"
                             height={((windowHeight / 6.25) + 'px')}
                             width={((windowWidth / 7.5) + 'px')}
                             ref={webcamRef2}
                             screenshotFormat="image/jpeg"
                             videoConstraints={videoConstraints2}
                           />


                           <Button  variant="contained" color="success" style={{marginBottom: ((windowHeight / 100) * 3) + '%', marginTop:  ((windowHeight / 100) * 1) + '%', height: ((windowHeight / 20) + 'px'), width: "190%" }} onClick={capture2}>Take photo</Button>
                         </div>
                       ) : (
                         <>
                           <img style={{ marginTop: "5%", height: ((windowHeight / 6.25) + 'px'), width: ((windowWidth / 7.5) + 'px') }} src={img2} alt="screenshot" />
                           <Button  variant="contained" color="error" style={{marginBottom: ((windowHeight / 100) * 1) + '%', marginTop:  ((windowHeight / 100) * 1) + '%', height: ((windowHeight / 20) + 'px'), width: "190%" }} onClick={() => setImg2(null)}>Retake</Button>


                         </>
                       )}


                     </div>
                   )}
                  
                 </Box>
               </Grid>
               <Grid item xs={6} >
                 <Box sx={{ width: '100%', height: (windowHeight / 10) * 1 }}><p style={{ fontSize: (((windowWidth * windowHeight) / 20000) + 'px'), marginBottom: (('-' + (windowWidth * windowHeight) / 65000) + '%'), color: 'white', textAlign: 'center', marginTop: ((windowHeight / 50) + 'px') }}>
                   MPR
                 </p><p style={{ fontSize: (((windowWidth * windowHeight) / 23000) + 'px'), color: 'white', textAlign: 'center' }}>
                     {playerTwoMPR}
                   </p>
                  
                  
                   </Box>
                  
               </Grid>
             
             </Grid>
             <Box style={{marginTop:  (windowHeight / 60) + '%'}} item xs={12}><div>
                 <div align='center' style={{ display: 'flex', height: (windowHeight / 11) + '%' }}> <img style={{maxHeight: (((windowHeight / 100) * 7) + 'px') ,width: ((windowWidth / 100) * 8.5) + 'px'}} align='center' src={rotatePic} onClick={changeplayer2Icon} class="rotButton"></img> <img style={{maxHeight: (((windowHeight / 100) * 7) + 'px'),  width: ((windowWidth / 100) * 8.5) + 'px'}} align='center'  src={cameraPic} onClick={toggleImageVisibility2} class="rotButton"></img></div>
                 </div></Box>
             </Box></Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ height: (windowHeight / 10) * 6.5 }} > <Box sx={{ height: (windowHeight / 10) * 1 }}> <img class="barImageMobile" src={bar} style={{ marginTop: ((windowHeight / 150) + 'px'), height: ((windowHeight / 90) + 'px'), maxHeight: ((windowHeight / 30) + 'px') }}></img><div class="container">
                <img src={imageOne20} class="scoreLogo" onClick={changeImageTeamOne20} style={{ marginTop: '1%', marginBottom: '4%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }} ></img>
                <p class="numberBarText" style={{ marginTop: ((windowHeight / 75) + '%'), fontSize: ((windowHeight / 22.5) + 'px') }} >20</p>
                <img src={imageTwo20} class="scoreLogo" onClick={changeImageTeamTwo20} style={{ marginTop: '2%', marginBottom: '4%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
              </div></Box>
                <Box sx={{ height: (windowHeight / 10) * 1 }}><img src={bar} class="barImageMobile" style={{ height: ((windowHeight / 90) + 'px'), maxHeight: ((windowHeight / 20) + 'px') }}></img>
                  <div class="container">
                    <img src={imageOne19} class="scoreLogo" onClick={changeImageTeamOne19} style={{ marginTop: '1%', marginBottom: '4%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                    <p class="numberBarText" style={{ marginTop: ((windowHeight / 75) + '%'), fontSize: ((windowHeight / 22.5) + 'px') }} >19</p>
                    <img src={imageTwo19} class="scoreLogo" onClick={changeImageTeamTwo19} style={{ marginTop: '1%', marginBottom: '4%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                  </div></Box>
                <Box sx={{ height: (windowHeight / 10) * 1 }}>  <img src={bar} class="barImageMobile" style={{ height: ((windowHeight / 90) + 'px'), maxHeight: ((windowHeight / 20) + 'px') }}></img><div class="container">
                  <img src={imageOne18} class="scoreLogo" onClick={changeImageTeamOne18} style={{ marginTop: '1%', marginBottom: '4%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                  <p class="numberBarText" style={{ marginTop: ((windowHeight / 75) + '%'), fontSize: ((windowHeight / 22.5) + 'px') }} >18</p>
                  <img src={imageTwo18} class="scoreLogo" onClick={changeImageTeamTwo18} style={{ marginTop: '1%', marginBottom: '4%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                </div></Box>
                <Box sx={{ height: (windowHeight / 10) * 1 }}>  <img src={bar} class="barImageMobile" style={{ height: ((windowHeight / 90) + 'px'), maxHeight: ((windowHeight / 20) + 'px') }}></img><div class="container">
                  <img src={imageOne17} class="scoreLogo" onClick={changeImageTeamOne17} style={{ marginTop: '1%', marginBottom: '4%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                  <p class="numberBarText" style={{ marginTop: ((windowHeight / 75) + '%'), fontSize: ((windowHeight / 22.5) + 'px') }} >17</p>
                  <img src={imageTwo17} class="scoreLogo" onClick={changeImageTeamTwo17} style={{ marginTop: '1%', marginBottom: '4%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                </div></Box>
                <Box sx={{ height: (windowHeight / 10) * 1 }}>  <img src={bar} class="barImageMobile" style={{ height: ((windowHeight / 90) + 'px'), maxHeight: ((windowHeight / 20) + 'px') }}></img><div class="container">
                  <img src={imageOne16} class="scoreLogo" onClick={changeImageTeamOne16} style={{ marginTop: '1%', marginBottom: '4%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                  <p class="numberBarText" style={{ marginTop: ((windowHeight / 75) + '%'), fontSize: ((windowHeight / 22.5) + 'px') }} >16</p>
                  <img src={imageTwo16} class="scoreLogo" onClick={changeImageTeamTwo16} style={{ marginTop: '1%', marginBottom: '4%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                </div></Box>
                <Box sx={{ height: (windowHeight / 10) * 1 }}>  <img src={bar} class="barImageMobile" style={{ height: ((windowHeight / 90) + 'px'), maxHeight: ((windowHeight / 20) + 'px') }}></img><div class="container">
                  <img src={imageOne15} class="scoreLogo" onClick={changeImageTeamOne15} style={{ marginTop: '1%', marginBottom: '4%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                  <p class="numberBarText" style={{ marginTop: ((windowHeight / 75) + '%'), fontSize: ((windowHeight / 22.5) + 'px') }} >15</p>
                  <img src={imageTwo15} class="scoreLogo" onClick={changeImageTeamTwo15} style={{ marginTop: '1%', marginBottom: '4%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                </div></Box>
                <Box sx={{ height: (windowHeight / 10) * 1 }}> <img src={bar} class="barImageMobile" style={{ height: ((windowHeight / 90) + 'px'), maxHeight: ((windowHeight / 20) + 'px') }}></img><div class="container">
                  <img src={imageOne25} class="scoreLogo" onClick={changeImageTeamOne25} style={{ marginTop: '1%', marginBottom: '4%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                  <img src={bull} class="bullLogo" style={{marginTop: ((windowHeight / 1500) + '%'), height: ((windowHeight / 10 * .625) + 'px'), width: ((windowHeight / 10 * .55) + 'px') }}></img>
                  <img src={imageTwo25} class="scoreLogo" onClick={changeImageTeamTwo25} style={{ marginTop: '1%', marginBottom: '4%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                </div></Box>
              </Box>
            </Grid>
            <Grid item xs={4} border={0} borderColor="blue" spacing={2} >
              <Box sx={{ height: (windowHeight / 10) * 6.5 }}> 
              
              


              <Box sx={{ width: '100%', height: (windowHeight / 10) * 3.3 }} border={6} borderColor={playerThreeUp} borderRadius="6%"><Grid container>
               <Grid item xs={6}>
                 <Box style={{}} sx={{ width: '100%', marginLeft: "5%", height: (windowHeight / 10) * 2 }} >
                   {isHidden3 ? <img style={{ marginTop: ((windowHeight / 100) + '%') }} src={playerThreePic} class="guy"></img> : (


                     <div >
                       {img3 === null ? (
                         <div style={{ marginTop: "5%",  }}>
                           <Webcam
                             audio={false}
                             mirrored={false}
                             facingMode= "user"
                             height={((windowHeight / 6.25) + 'px')}
                             width={((windowWidth / 7.5) + 'px')}
                             ref={webcamRef3}
                             screenshotFormat="image/jpeg"
                             videoConstraints={videoConstraints3}
                           />


                           <Button  variant="contained" color="success" style={{marginBottom: ((windowHeight / 100) * 3) + '%', marginTop:  ((windowHeight / 100) * 1) + '%', height: ((windowHeight / 20) + 'px'), width: "190%" }} onClick={capture3}>Take photo</Button>
                         </div>
                       ) : (
                         <>
                           <img style={{ marginTop: "5%", height: ((windowHeight / 6.25) + 'px'), width: ((windowWidth / 7.5) + 'px') }} src={img3} alt="screenshot" />
                           <Button  variant="contained" color="error" style={{marginBottom: ((windowHeight / 100) * 1) + '%', marginTop:  ((windowHeight / 100) * 1) + '%', height: ((windowHeight / 20) + 'px'), width: "190%" }} onClick={() => setImg3(null)}>Retake</Button>


                         </>
                       )}


                     </div>
                   )}
                  
                 </Box>
               </Grid>
               <Grid item xs={6} >
                 <Box sx={{ width: '100%', height: (windowHeight / 10) * 1 }}><p style={{ fontSize: (((windowWidth * windowHeight) / 20000) + 'px'), marginBottom: (('-' + (windowWidth * windowHeight) / 65000) + '%'), color: 'white', textAlign: 'center', marginTop: ((windowHeight / 50) + 'px') }}>
                   MPR
                 </p><p style={{ fontSize: (((windowWidth * windowHeight) / 23000) + 'px'), color: 'white', textAlign: 'center' }}>
                     {playerThreeMPR}
                   </p>
                  
                  
                   </Box>
                  
               </Grid>
             
             </Grid>
             <Box style={{marginTop:  (windowHeight / 60) + '%'}} item xs={12}><div>
                 <div align='center' style={{ display: 'flex', height: (windowHeight / 11) + '%' }}> <img style={{maxHeight: (((windowHeight / 100) * 7) + 'px') ,width: ((windowWidth / 100) * 8.5) + 'px'}} align='center' src={rotatePic} onClick={changeplayer3Icon} class="rotButton"></img> <img style={{maxHeight: (((windowHeight / 100) * 7) + 'px'),  width: ((windowWidth / 100) * 8.5) + 'px'}} align='center'  src={cameraPic} onClick={toggleImageVisibility3} class="rotButton"></img></div>
                 </div></Box>
             </Box>
              
              
              
               <Box hidden={playerThreeAndFourVisible} sx={{ width: '100%', height: (windowHeight / 10) * 3.3 }} border={6} borderColor={playerFourUp} borderRadius="6%"><Grid container>
               <Grid item xs={6}>
                 <Box style={{}} sx={{ width: '100%', marginLeft: "5%", height: (windowHeight / 10) * 2 }} >
                   {isHidden4 ? <img style={{ marginTop: ((windowHeight / 100) + '%') }} src={playerFourPic} class="guy"></img> : (


                     <div >
                       {img4 === null ? (
                         <div style={{ marginTop: "5%",  }}>
                           <Webcam
                             audio={false}
                             mirrored={false}
                             facingMode= "user"
                             height={((windowHeight / 6.25) + 'px')}
                             width={((windowWidth / 7.5) + 'px')}
                             ref={webcamRef4}
                             screenshotFormat="image/jpeg"
                             videoConstraints={videoConstraints4}
                           />


                           <Button  variant="contained" color="success" style={{marginBottom: ((windowHeight / 100) * 3) + '%', marginTop:  ((windowHeight / 100) * 1) + '%', height: ((windowHeight / 20) + 'px'), width: "190%" }} onClick={capture4}>Take photo</Button>
                         </div>
                       ) : (
                         <>
                           <img style={{ marginTop: "5%", height: ((windowHeight / 6.25) + 'px'), width: ((windowWidth / 7.5) + 'px') }} src={img4} alt="screenshot" />
                           <Button  variant="contained" color="error" style={{marginBottom: ((windowHeight / 100) * 1) + '%', marginTop:  ((windowHeight / 100) * 1) + '%', height: ((windowHeight / 20) + 'px'), width: "190%" }} onClick={() => setImg4(null)}>Retake</Button>


                         </>
                       )}


                     </div>
                   )}
                  
                 </Box>
               </Grid>
               <Grid item xs={6} >
                 <Box sx={{ width: '100%', height: (windowHeight / 10) * 1 }}><p style={{ fontSize: (((windowWidth * windowHeight) / 20000) + 'px'), marginBottom: (('-' + (windowWidth * windowHeight) / 65000) + '%'), color: 'white', textAlign: 'center', marginTop: ((windowHeight / 50) + 'px') }}>
                   MPR
                 </p><p style={{ fontSize: (((windowWidth * windowHeight) / 23000) + 'px'), color: 'white', textAlign: 'center' }}>
                     {playerFourMPR}
                   </p>
                  
                  
                   </Box>
                  
               </Grid>
             
             </Grid>
             <Box style={{marginTop:  (windowHeight / 60) + '%'}} item xs={12}><div>
                 <div align='center' style={{ display: 'flex', height: (windowHeight / 11) + '%' }}> <img style={{maxHeight: (((windowHeight / 100) * 7) + 'px') ,width: ((windowWidth / 100) * 8.5) + 'px'}} align='center' src={rotatePic} onClick={changeplayer4Icon} class="rotButton"></img> <img style={{maxHeight: (((windowHeight / 100) * 7) + 'px'),  width: ((windowWidth / 100) * 8.5) + 'px'}} align='center'  src={cameraPic} onClick={toggleImageVisibility4} class="rotButton"></img></div>
                 </div></Box>
             </Box>
</Box>
            </Grid>
            <Grid item xs={12}>

              <Box sx={{marginTop: (windowHeight / 100) * .5 + "px" , height: (windowHeight / 10) * .5 }}>

                <Grid container spacing={1}>
                  <Grid item xs={4}>

                    <div className="container">
                      <Button
                        style={{
                          height: (windowHeight / 17.5),
                          fontSize: ((windowHeight / 70) + 'px')
                        }}
                        variant="contained"
                        color="success"
                        onClick={swapGme}
                      >
                        {totalPlayersTitle}
                      </Button>
                    </div>
                  </Grid>



                  <Grid item xs={4}>
                    <div className="container">
                      <Button
                        style={{
                          height: (windowHeight / 17.5),
                          fontSize: ((windowHeight / 70) + 'px')
                        }}
                        variant="contained"
                        color={negativeModeColor}
                        onClick={swapScoreMode}
                      >
                        {negativeModeText}
                      </Button>
                    </div>
                  </Grid>


                  <Grid item xs={4}>
                    <div className="container">
                      <Button
                        style={{
                          height: (windowHeight / 17.5),
                          fontSize: ((windowHeight / 70) + 'px')
                        }}
                        variant="contained"
                        color="success"
                        onClick={nextPlayerUp}
                      >
                        Next Player
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Box>

            </Grid>

          </Grid>

        </Box>


      </div>
    )
  } else {
    return (

      <div className="gameWeb">


        <Box>
          <Dialog
            open={open}>
            <DialogTitle class="alertText">Game Over
            </DialogTitle>
            <DialogContent>
              <DialogContentText class="alertBody">
                Team {winner} has won the Game!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={handleClose} >
                CLOSE
              </Button>
              <Button variant="contained" onClick={refreshView}>
                RESTART
              </Button>
            </DialogActions>


          </Dialog>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box sx={{ width: '100%', height: (windowHeight / 10) * 1.25 }}><h1 class="pointsText" style={{ fontSize: ((windowHeight / 20) + 'px') }} >Points</h1><h2 class="pointsNumber" style={{ fontSize: ((windowHeight / 20) + 'px') }}>{pointsTeamOne} </h2></Box>
            </Grid>
            <Grid item xs={4} spacing={5}>
              <Box sx={{ height: (windowHeight / 10) * 1.25 }}> <h1 class="vsText" style={{ fontSize: ((windowHeight / 12) + 'px') }}>VS</h1></Box>
            </Grid>
            <Grid item xs={4}  >
              <Box sx={{ width: '100%', height: (windowHeight / 10) * 1.25 }}><h1 class="pointsText" style={{ fontSize: ((windowHeight / 20) + 'px') }}>Points</h1><h2 class="pointsNumber" style={{ fontSize: ((windowHeight / 20) + 'px') }}>{pointsTeamTwo} </h2></Box>
            </Grid>
            <Grid item xs={4} border={0} borderColor="blue" spacing={2} >
              <Box sx={{ height: (windowHeight / 10) * 6.5 }}> <Box sx={{ width: '100%', height: (windowHeight / 10) * 3 }} border={6} borderColor={playerOneUp} borderRadius="6%"><Grid container>
                <Grid item xs={6}>
                  <Box style={{}} sx={{ width: '100%', marginLeft: "5%", height: (windowHeight / 10) * 3 }} >
                    {isHidden ? <img style={{ marginTop: ((windowHeight / 100) + '%') }} src={playerOnePic} class="guy"></img> : (

                      <div>
                        {img === null ? (
                          <div style={{ marginTop: "5%" }}>
                            <Webcam
                              audio={false}
                              mirrored={false}
                              facingMode= "user"
                              height={((windowHeight / 6) + 'px')}
                              width={((windowWidth / 6.25) + 'px')}
                              ref={webcamRef}
                              screenshotFormat="image/jpeg"
                              videoConstraints={videoConstraints}
                            />

                            <Button style={{ height: ((windowHeight / 30) + 'px'), width: "100%" }} onClick={capture}>Take photo</Button>
                          </div>
                        ) : (
                          <>
                            <img style={{ marginTop: "5%", height: ((windowHeight / 6) + 'px'), width: ((windowWidth / 8.5) + 'px') }} src={img} alt="screenshot" />
                            <Button color="error" style={{ height: ((windowHeight / 25) + 'px'), width: "100%" }} onClick={() => setImg(null)}>Retake</Button>

                          </>
                        )}

                      </div>
                    )}
                    <div align='center' style={{ display: 'flex', height: (windowHeight / 10) + '%' }}> <img style={{ marginTop: ((windowHeight / 250) + '%') }} align='center' src={rotatePic} onClick={changeplayer1Icon} class="rotButton"></img> <img style={{ marginTop: ((windowHeight / 250) + '%') }} align='center' src={cameraPic} onClick={toggleImageVisibility} class="rotButton"></img></div></Box>
                </Grid>
                <Grid item xs={6} >
                  <Box sx={{ width: '100%', height: (windowHeight / 10) * 3 }}><p style={{ fontSize: (((windowWidth * windowHeight) / 20000) + 'px'), marginBottom: (('-' + (windowWidth * windowHeight) / 65000) + '%'), color: 'white', textAlign: 'center', marginTop: ((windowHeight / 50) + 'px') }}>
                    MPR
                  </p><p style={{ fontSize: (((windowWidth * windowHeight) / 23000) + 'px'), color: 'white', textAlign: 'center' }}>
                      {playerOneMPR}
                    </p></Box>
                </Grid>
              </Grid>
              </Box> <Box hidden={playerThreeAndFourVisible} sx={{ width: '100%', height: (windowHeight / 10) * 3 }} border={6} borderColor={playerTwoUp} borderRadius="6%"><Grid container>
                <Grid item xs={6}>
                  <Box sx={{ width: '100%', marginLeft: "5%", height: (windowHeight / 10) * 3 }} >
                    {isHidden2 ? <img style={{ marginTop: ((windowHeight / 100) + '%') }} src={playerTwoPic} class="guy"></img> : (

                      <div>
                        {img2 === null ? (
                          <div style={{ marginTop: "5%" }}>
                            <Webcam
                              audio={false}
                              mirrored={false}
                              facingMode= "user"
                              height={((windowHeight / 6) + 'px')}
                              width={((windowWidth / 6.25) + 'px')}
                              ref={webcamRef2}
                              screenshotFormat="image/jpeg"
                              videoConstraints={videoConstraints2}
                            />

                            <Button style={{ height: ((windowHeight / 30) + 'px'), width: "100%" }} onClick={capture2}>Take photo</Button>
                          </div>
                        ) : (
                          <>
                            <img style={{ marginTop: "5%", height: ((windowHeight / 6) + 'px'), width: ((windowWidth / 8.5) + 'px') }} src={img2} alt="screenshot" />
                            <Button color="error" style={{ height: ((windowHeight / 25) + 'px'), width: "100%" }} onClick={() => setImg2(null)}>Retake</Button>

                          </>
                        )}

                      </div>
                    )}

                    <div align='center' style={{ display: 'flex', height: (windowHeight / 10) + '%' }}> <img style={{ marginTop: ((windowHeight / 100) + '%') }} align='center' src={rotatePic} onClick={changeplayer2Icon} class="rotButton"></img> <img style={{ marginTop: ((windowHeight / 100) + '%') }} align='center' src={cameraPic} onClick={toggleImageVisibility2} class="rotButton"></img></div></Box>
                </Grid>
                <Grid item xs={6} >
                  <Box sx={{ width: '100%', height: (windowHeight / 10) * 3 }}><p style={{ fontSize: (((windowWidth * windowHeight) / 20000) + 'px'), marginBottom: (('-' + (windowWidth * windowHeight) / 65000) + '%'), color: 'white', textAlign: 'center', marginTop: ((windowHeight / 50) + 'px') }}>
                    MPR
                  </p><p style={{ fontSize: (((windowWidth * windowHeight) / 23000) + 'px'), color: 'white', textAlign: 'center' }}>
                      {playerTwoMPR}
                    </p></Box>
                </Grid>
              </Grid>
                </Box></Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ height: (windowHeight / 10) * 6.5 }} > <Box sx={{ height: (windowHeight / 10) * .85 }}> <img class="barImageWeb" src={bar} style={{ height: ((windowHeight / 90) + 'px'), maxHeight: ((windowHeight / 30) + 'px') }}></img><div class="container">
                <img src={imageOne20} class="scoreLogo" onClick={changeImageTeamOne20} style={{ marginTop: '1%', marginBottom: '1%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }} ></img>
                <p class="numberBarText" style={{ marginTop: ((windowHeight / 190) + '%'), fontSize: ((windowHeight / 20) + 'px') }} >20</p>
                <img src={imageTwo20} class="scoreLogo" onClick={changeImageTeamTwo20} style={{ marginTop: '2%', marginBottom: '2%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
              </div></Box>
                <Box sx={{ height: (windowHeight / 10) * .85 }}><img src={bar} class="barImageWeb" style={{ height: ((windowHeight / 90) + 'px'), maxHeight: ((windowHeight / 20) + 'px') }}></img>
                  <div class="container">
                    <img src={imageOne19} class="scoreLogo" onClick={changeImageTeamOne19} style={{ marginTop: '1%', marginBottom: '1%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                    <p class="numberBarText" style={{ marginTop: ((windowHeight / 190) + '%'), fontSize: ((windowHeight / 20) + 'px') }} >19</p>
                    <img src={imageTwo19} class="scoreLogo" onClick={changeImageTeamTwo19} style={{ marginTop: '1%', marginBottom: '1%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                  </div></Box>
                <Box sx={{ height: (windowHeight / 10) * .85 }}>  <img src={bar} class="barImageWeb" style={{ height: ((windowHeight / 90) + 'px'), maxHeight: ((windowHeight / 20) + 'px') }}></img><div class="container">
                  <img src={imageOne18} class="scoreLogo" onClick={changeImageTeamOne18} style={{ marginTop: '1%', marginBottom: '1%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                  <p class="numberBarText" style={{ marginTop: ((windowHeight / 190) + '%'), fontSize: ((windowHeight / 20) + 'px') }} >18</p>
                  <img src={imageTwo18} class="scoreLogo" onClick={changeImageTeamTwo18} style={{ marginTop: '1%', marginBottom: '1%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                </div></Box>
                <Box sx={{ height: (windowHeight / 10) * .85 }}>  <img src={bar} class="barImageWeb" style={{ height: ((windowHeight / 90) + 'px'), maxHeight: ((windowHeight / 20) + 'px') }}></img><div class="container">
                  <img src={imageOne17} class="scoreLogo" onClick={changeImageTeamOne17} style={{ marginTop: '1%', marginBottom: '1%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                  <p class="numberBarText" style={{ marginTop: ((windowHeight / 190) + '%'), fontSize: ((windowHeight / 20) + 'px') }} >17</p>
                  <img src={imageTwo17} class="scoreLogo" onClick={changeImageTeamTwo17} style={{ marginTop: '1%', marginBottom: '1%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                </div></Box>
                <Box sx={{ height: (windowHeight / 10) * .85 }}>  <img src={bar} class="barImageWeb" style={{ height: ((windowHeight / 90) + 'px'), maxHeight: ((windowHeight / 20) + 'px') }}></img><div class="container">
                  <img src={imageOne16} class="scoreLogo" onClick={changeImageTeamOne16} style={{ marginTop: '1%', marginBottom: '1%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                  <p class="numberBarText" style={{ marginTop: ((windowHeight / 190) + '%'), fontSize: ((windowHeight / 20) + 'px') }} >16</p>
                  <img src={imageTwo16} class="scoreLogo" onClick={changeImageTeamTwo16} style={{ marginTop: '1%', marginBottom: '1%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                </div></Box>
                <Box sx={{ height: (windowHeight / 10) * .85 }}>  <img src={bar} class="barImageWeb" style={{ height: ((windowHeight / 90) + 'px'), maxHeight: ((windowHeight / 20) + 'px') }}></img><div class="container">
                  <img src={imageOne15} class="scoreLogo" onClick={changeImageTeamOne15} style={{ marginTop: '1%', marginBottom: '1%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                  <p class="numberBarText" style={{ marginTop: ((windowHeight / 190) + '%'), fontSize: ((windowHeight / 20) + 'px') }} >15</p>
                  <img src={imageTwo15} class="scoreLogo" onClick={changeImageTeamTwo15} style={{ marginTop: '1%', marginBottom: '1%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                </div></Box>
                <Box sx={{ height: (windowHeight / 10) * .85 }}> <img src={bar} class="barImageWeb" style={{ height: ((windowHeight / 90) + 'px'), maxHeight: ((windowHeight / 20) + 'px') }}></img><div class="container">
                  <img src={imageOne25} class="scoreLogo" onClick={changeImageTeamOne25} style={{ marginTop: '1%', marginBottom: '1%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                  <img src={bull} class="bullLogo" style={{ height: ((windowHeight / 10 * 1) + 'px') }}></img>
                  <img src={imageTwo25} class="scoreLogo" onClick={changeImageTeamTwo25} style={{ marginTop: '1%', marginBottom: '1%', maxHeight: ((windowHeight / 16) + 'px'), maxWidth: ((windowWidth / 20 + 'px')) }}></img>
                </div></Box>
              </Box>
            </Grid>
            <Grid item xs={4} border={0} borderColor="blue" spacing={2} >
              <Box sx={{ height: (windowHeight / 10) * 6.5 }}> <Box sx={{ width: '100%', height: (windowHeight / 10) * 3 }} border={6} borderColor={playerThreeUp} borderRadius="6%"><Grid container>
                <Grid item xs={6}>
                  <Box sx={{ width: '100%', marginLeft: "5%", height: (windowHeight / 10) * 3 }} >
                    {isHidden3 ? <img style={{ marginTop: ((windowHeight / 100) + '%') }} src={playerThreePic} class="guy"></img> : (

                      <div>
                        {img3 === null ? (
                          <div style={{ marginTop: "5%" }}>
                            <Webcam
                              audio={false}
                              mirrored={false}
                              facingMode= "user"
                              height={((windowHeight / 6) + 'px')}
                              width={((windowWidth / 6.25) + 'px')}
                              ref={webcamRef3}
                              screenshotFormat="image/jpeg"
                              videoConstraints={videoConstraints3}
                            />

                            <Button style={{ height: ((windowHeight / 30) + 'px'), width: "100%" }} onClick={capture3}>Take photo</Button>
                          </div>
                        ) : (
                          <>
                            <img style={{ marginTop: "5%", height: ((windowHeight / 6) + 'px'), width: ((windowWidth / 8.5) + 'px') }} src={img3} alt="screenshot" />
                            <Button color="error" style={{ height: ((windowHeight / 25) + 'px'), width: "100%" }} onClick={() => setImg3(null)}>Retake</Button>

                          </>
                        )}

                      </div>
                    )}
                    <div align='center' style={{ display: 'flex', height: (windowHeight / 10) + '%' }}> <img style={{ marginTop: ((windowHeight / 100) + '%') }} align='center' src={rotatePic} onClick={changeplayer3Icon} class="rotButton"></img> <img style={{ marginTop: ((windowHeight / 100) + '%') }} align='center' src={cameraPic} onClick={toggleImageVisibility3} class="rotButton"></img></div></Box>
                </Grid>
                <Grid item xs={6} >
                  <Box sx={{ width: '100%', height: (windowHeight / 10) * 3 }}><p style={{ fontSize: (((windowWidth * windowHeight) / 20000) + 'px'), marginBottom: (('-' + (windowWidth * windowHeight) / 65000) + '%'), color: 'white', textAlign: 'center', marginTop: ((windowHeight / 50) + 'px') }}>
                    MPR
                  </p><p style={{ fontSize: (((windowWidth * windowHeight) / 23000) + 'px'), color: 'white', textAlign: 'center' }}>
                      {playerThreeMPR}
                    </p></Box>
                </Grid>
              </Grid>
              </Box> <Box hidden={playerThreeAndFourVisible} sx={{ width: '100%', height: (windowHeight / 10) * 3 }} border={6} borderColor={playerFourUp} borderRadius="6%"><Grid container>
                <Grid item xs={6}>
                  <Box sx={{ width: '100%', marginLeft: "5%", height: (windowHeight / 10) * 3 }} >
                    {isHidden4 ? <img style={{ marginTop: ((windowHeight / 100) + '%') }} src={playerFourPic} class="guy"></img> : (


                      <div>
                        {img4 === null ? (
                          <div style={{ marginTop: "5%" }}>
                            <Webcam
                              audio={false}
                              mirrored={false}
                              facingMode= "user"
                              height={((windowHeight / 6) + 'px')}
                              width={((windowWidth / 3) + 'px')}
                              ref={webcamRef4}
                              screenshotFormat="image/jpeg"
                              videoConstraints={videoConstraints4}
                            />


                            <Button style={{ height: ((windowHeight / 30) + 'px'), width: "100%" }} onClick={capture4}>Take photo</Button>
                          </div>
                        ) : (
                          <>
                            <img style={{ marginTop: "5%", height: ((windowHeight / 6) + 'px'), width: ((windowWidth / 8.5) + 'px') }} src={img4} alt="screenshot" />
                            <Button color="error" style={{ height: ((windowHeight / 45) + 'px'), width: "100%" }} onClick={() => setImg4(null)}>Retake</Button>


                          </>
                        )}


                      </div>
                    )}



                    <div align='center' style={{ display: 'flex', height: (windowHeight / 10) + '%' }}> <img style={{ marginTop: ((windowHeight / 100) + '%') }} align='center' src={rotatePic} onClick={changeplayer4Icon} class="rotButton"></img> <img style={{ marginTop: ((windowHeight / 100) + '%') }} align='center' src={cameraPic} onClick={toggleImageVisibility4} class="rotButton"></img></div></Box>
                </Grid>
                <Grid item xs={6} >
                  <Box sx={{ width: '100%', height: (windowHeight / 10) * 3 }}><p style={{ fontSize: (((windowWidth * windowHeight) / 20000) + 'px'), marginBottom: (('-' + (windowWidth * windowHeight) / 65000) + '%'), color: 'white', textAlign: 'center', marginTop: ((windowHeight / 50) + 'px') }}>
                    MPR
                  </p><p style={{ fontSize: (((windowWidth * windowHeight) / 23000) + 'px'), color: 'white', textAlign: 'center' }}>
                      {playerFourMPR}
                    </p></Box>
                </Grid>
              </Grid>
                </Box></Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ height: (windowHeight / 10) * .5 }}>

                <Grid container spacing={1}>
                  <Grid item xs={4}>

                    <div className="container">
                      <Button
                        style={{
                          height: (windowHeight / 17.5),
                          fontSize: ((windowHeight / 70) + 'px')
                        }}
                        variant="contained"
                        color="success"
                        onClick={swapGme}
                      >
                        {totalPlayersTitle}
                      </Button>
                    </div>
                  </Grid>



                  <Grid item xs={4}>
                    <div className="container">
                      <Button
                        style={{
                          height: (windowHeight / 17.5),
                          fontSize: ((windowHeight / 70) + 'px')
                        }}
                        variant="contained"
                        color={negativeModeColor}
                        onClick={swapScoreMode}
                      >
                        {negativeModeText}
                      </Button>
                    </div>
                  </Grid>


                  <Grid item xs={4}>
                    <div className="container">
                      <Button
                        style={{
                          height: (windowHeight / 17.5),
                          fontSize: ((windowHeight / 70) + 'px')
                        }}
                        variant="contained"
                        color="success"
                        onClick={nextPlayerUp}
                      >
                        Next Player
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Box>

            </Grid>

          </Grid>

        </Box>


      </div>
    )

  }
}
