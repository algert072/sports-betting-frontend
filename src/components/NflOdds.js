import React from "react";
import Moment from "react-moment";
import nflLogos from "../data/nflLogos";
import Collapse from '../components/Collapse'

const NflOdds = (props) => {
 
  return (
    <div class="mx-auto">
      <h1>NFL Odds</h1>
      <div class="gap-x-2 sm:grid-cols-1 grid md:grid-cols-3 lg:grid-cols-4">
        {props.nflodds &&
          props.nflodds.map((nflGame) => {
            return (
              <div class="sm:w-8/10 p-4 md:w-8/10 p-4 lg:w-11/12 p-4 border-2 border-green-600 mb-1 rounded overflow-hidden shadow-lg" key={nflGame.teams[0]}>
                <div>
                  <header class="text-center font-extrabold" width="95%" margin="10px">
                    
                      {nflGame.teams[0]} @ {nflGame.teams[1]}
                  </header>
                  <br></br>
                  <div className="text-center mb-1">
                    
                      <Moment unix format="MM/DD/YY  LT">
                        {nflGame.commence_time}
                      </Moment>
                  
                  </div>
                 <div class="flex justify-center items-center">
                    <img class=""
                      src={nflLogos[nflGame.teams[0]]}
                      style={{
                        width: "30%",
                        height: "30%",
                      }}
                      alt="team logo"
                    />
                    {" @ "}
                    <img
                      src={nflLogos[nflGame.teams[1]]}
                      style={{
                        width: "30%",
                        height: "30%",
                      }}
                      alt="team logo"
                    />
                  </div> 
                  
                    <Collapse game={nflGame}/>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NflOdds;

// import React from "react";
// import {
//   Button,
//   Card,
//   CardHeader,
//   CardImg,
//   CardColumns,
//   CardSubtitle,
//   CardBody,
//   Container,
//   UncontrolledCollapse,
// } from "reactstrap";
// import Moment from "react-moment";
// import nflLogos from "../data/nflLogos";

// const NflOdds = (props) => {
//   return (
//     <div fluid style={{ margin: "20px" }}>
//       <h1>NFL Odds</h1>

//       <CardColumns>
//         {props.nflodds &&
//           props.nflodds.map((nflGame) => {
//             return (
//               <Card key={nflGame.teams[0]}>
//                 <CardBody>
//                   <header className="text-center font-extrabold" width="95%" margin="10px">
                    
//                       {nflGame.teams[0]} @ {nflGame.teams[1]}
                    
//                   </header>
//                   <br></br>
//                   <div className="text-center mb-1">
                    
//                       <Moment unix format="MM/DD/YY  LT">
//                         {nflGame.commence_time}
//                       </Moment>
                  
//                   </div>
//                  <div className="flex justify-center items-center">
//                     <img className=""
//                       src={nflLogos[nflGame.teams[0]]}
//                       style={{
//                         width: "30%",
//                         height: "30%",
//                       }}
//                       alt="Card image cap"
//                     />
//                     {" @ "}
//                     <img
//                       src={nflLogos[nflGame.teams[1]]}
//                       style={{
//                         width: "30%",
//                         height: "30%",
//                       }}
//                       alt="Card image cap"
//                     />
//                   </div> 
//                   <Button id={nflGame.home_team.replaceAll(" ", "_")}>
//                     Odds
//                   </Button>
//                   <UncontrolledCollapse
//                     toggler={`${nflGame.home_team.replaceAll(" ", "_")}`}
//                     style={{ marginTop: "10px" }}
//                   >
//                     {nflGame.sites &&
//                       nflGame.sites
//                         .filter(
//                           (betsite) =>
//                             betsite.site_nice === "FanDuel" ||
//                             betsite.site_nice === "DraftKings" ||
//                             betsite.site_nice === "PointsBet (US)"
//                         )
//                         .map((site) => {
//                           return (
//                             <p key={site.site_nice}>
//                               {site.site_nice}
//                               <li>
//                                 {nflGame.teams[0]}:{" "}
//                                 {site.odds.spreads.points[0]}{" "}
//                                 {site.odds.spreads.odds[0]}
//                               </li>
//                               <li>
//                                 {nflGame.teams[1]}:{" "}
//                                 {site.odds.spreads.points[1]}{" "}
//                                 {site.odds.spreads.odds[1]}
//                               </li>
//                             </p>
//                           );
//                         })}
//                   </UncontrolledCollapse>
//                 </CardBody>
//               </Card>
//             );
//           })}
//       </CardColumns>
//     </div>
//   );
// };

// export default NflOdds;
