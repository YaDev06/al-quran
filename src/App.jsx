import React, { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import MainContainer from "./components/MainContainer";
import Footer from "./layouts/Footer";
import Surah from "./components/Surah";
import { getNine } from "./actions";
import { MainContext } from "./reducer/context";

function App() {
  const { setSurahs } = useContext(MainContext);

  useEffect(() => {
    getNine(1).then((data) => setSurahs(data));

    setTimeout(() => {
      getNine(2).then((data) => setSurahs(data));
    }, 100);

    setTimeout(() => {
      getNine(3).then((data) => setSurahs(data));
    }, 200);

    setTimeout(() => {
      getNine(4).then((data) => setSurahs(data));
    }, 300);

    setTimeout(() => {
      getNine(5).then((data) => setSurahs(data));
    }, 400);

    setTimeout(() => {
      getNine(6).then((data) => setSurahs(data));
    }, 500);

    setTimeout(() => {
      getNine(7).then((data) => setSurahs(data));
    }, 600);

    setTimeout(() => {
      getNine(8).then((data) => setSurahs(data));
    }, 700);

    setTimeout(() => {
      getNine(9).then((data) => setSurahs(data));
    }, 800);

    setTimeout(() => {
      getNine(10).then((data) => setSurahs(data));
      getNine(11).then((data) => setSurahs(data));
      getNine(12).then((data) => setSurahs(data));
      getNine(13).then((data) => setSurahs(data));
      getNine(14).then((data) => setSurahs(data));
      getNine(15).then((data) => setSurahs(data));
      getNine(16).then((data) => setSurahs(data));
      getNine(17).then((data) => setSurahs(data));
      getNine(18).then((data) => setSurahs(data));
      getNine(19).then((data) => setSurahs(data));
      getNine(20).then((data) => setSurahs(data));
      getNine(21).then((data) => setSurahs(data));
      getNine(22).then((data) => setSurahs(data));
      getNine(23).then((data) => setSurahs(data));
      getNine(24).then((data) => setSurahs(data));
      getNine(25).then((data) => setSurahs(data));
      getNine(26).then((data) => setSurahs(data));
      getNine(27).then((data) => setSurahs(data));
      getNine(28).then((data) => setSurahs(data));
      getNine(29).then((data) => setSurahs(data));
      getNine(30).then((data) => setSurahs(data));
      getNine(31).then((data) => setSurahs(data));
      getNine(32).then((data) => setSurahs(data));
      getNine(33).then((data) => setSurahs(data));
      getNine(34).then((data) => setSurahs(data));
      getNine(35).then((data) => setSurahs(data));
      getNine(36).then((data) => setSurahs(data));
      getNine(37).then((data) => setSurahs(data));
      getNine(38).then((data) => setSurahs(data));
      getNine(39).then((data) => setSurahs(data));
      getNine(40).then((data) => setSurahs(data));
      getNine(41).then((data) => setSurahs(data));
      getNine(42).then((data) => setSurahs(data));
      getNine(43).then((data) => setSurahs(data));
      getNine(44).then((data) => setSurahs(data));
      getNine(45).then((data) => setSurahs(data));
      getNine(46).then((data) => setSurahs(data));
      getNine(47).then((data) => setSurahs(data));
      getNine(48).then((data) => setSurahs(data));
      getNine(49).then((data) => setSurahs(data));
      getNine(50).then((data) => setSurahs(data));
      getNine(51).then((data) => setSurahs(data));
      getNine(52).then((data) => setSurahs(data));
      getNine(53).then((data) => setSurahs(data));
      getNine(54).then((data) => setSurahs(data));
      getNine(55).then((data) => setSurahs(data));
      getNine(56).then((data) => setSurahs(data));
      getNine(57).then((data) => setSurahs(data));
      getNine(58).then((data) => setSurahs(data));
      getNine(59).then((data) => setSurahs(data));
      getNine(60).then((data) => setSurahs(data));
      getNine(61).then((data) => setSurahs(data));
      getNine(62).then((data) => setSurahs(data));
      getNine(63).then((data) => setSurahs(data));
      getNine(64).then((data) => setSurahs(data));
      getNine(65).then((data) => setSurahs(data));
      getNine(66).then((data) => setSurahs(data));
      getNine(67).then((data) => setSurahs(data));
      getNine(68).then((data) => setSurahs(data));
      getNine(69).then((data) => setSurahs(data));
      getNine(70).then((data) => setSurahs(data));
      getNine(71).then((data) => setSurahs(data));
      getNine(72).then((data) => setSurahs(data));
      getNine(73).then((data) => setSurahs(data));
      getNine(74).then((data) => setSurahs(data));
      getNine(75).then((data) => setSurahs(data));
      getNine(76).then((data) => setSurahs(data));
      getNine(77).then((data) => setSurahs(data));
      getNine(78).then((data) => setSurahs(data));
      getNine(79).then((data) => setSurahs(data));
      getNine(80).then((data) => setSurahs(data));
      getNine(81).then((data) => setSurahs(data));
      getNine(82).then((data) => setSurahs(data));
      getNine(83).then((data) => setSurahs(data));
      getNine(84).then((data) => setSurahs(data));
      getNine(85).then((data) => setSurahs(data));
      getNine(86).then((data) => setSurahs(data));
      getNine(87).then((data) => setSurahs(data));
      getNine(88).then((data) => setSurahs(data));
      getNine(89).then((data) => setSurahs(data));
      getNine(90).then((data) => setSurahs(data));
      getNine(91).then((data) => setSurahs(data));
      getNine(92).then((data) => setSurahs(data));
      getNine(93).then((data) => setSurahs(data));
      getNine(94).then((data) => setSurahs(data));
      getNine(95).then((data) => setSurahs(data));
      getNine(96).then((data) => setSurahs(data));
      getNine(97).then((data) => setSurahs(data));
      getNine(98).then((data) => setSurahs(data));
      getNine(99).then((data) => setSurahs(data));
      getNine(100).then((data) => setSurahs(data));
      getNine(101).then((data) => setSurahs(data));
      getNine(102).then((data) => setSurahs(data));
      getNine(103).then((data) => setSurahs(data));
      getNine(104).then((data) => setSurahs(data));
      getNine(105).then((data) => setSurahs(data));
      getNine(106).then((data) => setSurahs(data));
      getNine(107).then((data) => setSurahs(data));
      getNine(108).then((data) => setSurahs(data));
      getNine(109).then((data) => setSurahs(data));
      getNine(110).then((data) => setSurahs(data));
      getNine(111).then((data) => setSurahs(data));
      getNine(112).then((data) => setSurahs(data));
      getNine(113).then((data) => setSurahs(data));
      getNine(114).then((data) => setSurahs(data));
    }, 1000);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/:id" element={<Surah />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
