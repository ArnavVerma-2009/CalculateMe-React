import "./App.css";

import Navbar from "./components/Navbar";

// IMPORTING BMI

import Bmi from "./components/Bmi";

// IMPORTING REACT ROUTER

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// IMPORTING HOMEPAGE

import HomePage from "./components/HomePage";

// AREA OF SHAPES
import AreaOfShapes from "./components/AreaOfShapes";
import Circle from "./components/Area of Shapes/Circle";
import NavbarHomePage from "./components/NavbarHomePage";
import Triangle from "./components/Area of Shapes/Triangle";
import Square from "./components/Area of Shapes/Square";
import Rectangle from "./components/Area of Shapes/Rectangle";
import Parallelogram from "./components/Area of Shapes/Parallelogram";
import SemiCircle from "./components/Area of Shapes/Semi-circle";
import Rhombus from "./components/Area of Shapes/Rhombus";
import Trapezium from "./components/Area of Shapes/Trapezium";
import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavbarHomePage />
                <HomePage />
              </>
            }
          ></Route>

          <Route
            path="/bmi"
            element={
              <>
                <Navbar />
                <Bmi />
              </>
            }
          ></Route>
          <Route
            path="/areaofshapes"
            element={
              <>
                <Navbar />
                <AreaOfShapes />
              </>
            }
          ></Route>

          <Route
            path="/areaofshapes/circle"
            element={
              <>
                <Navbar />
                <Circle />
              </>
            }
          ></Route>
          <Route
            path="/areaofshapes/triangle"
            element={
              <>
                <Navbar />
                <Triangle />
              </>
            }
          ></Route>
          <Route
            path="/areaofshapes/square"
            element={
              <>
                <Navbar />
                <Square />
              </>
            }
          ></Route>
          <Route
            path="/areaofshapes/rectangle"
            element={
              <>
                <Navbar />
                <Rectangle />
              </>
            }
          ></Route>
          <Route
            path="/areaofshapes/parallelogram"
            element={
              <>
                <Navbar />
                <Parallelogram />
              </>
            }
          ></Route>
          <Route
            path="/areaofshapes/semi-circle"
            element={
              <>
                <Navbar />
                <SemiCircle />
              </>
            }
          ></Route>
          <Route
            path="/areaofshapes/rhombus"
            element={
              <>
                <Navbar />
                <Rhombus />
              </>
            }
          ></Route>
          <Route
            path="/areaofshapes/trapezium"
            element={
              <>
                <Navbar />
                <Trapezium />
              </>
            }
          ></Route>
           <Route
            path="/calculator"
            element={
              <>
                <Navbar />
                <Calculator />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
