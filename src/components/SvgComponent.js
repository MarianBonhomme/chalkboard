import React, { useState, createRef, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const SvgComponent = (props) => {
  const [inViewRef, inView] = useInView();
  const pathRef = createRef();
  const [pathLength, setPathLength] = useState();

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [pathRef]);

  return (
    <Wrapper ref={inViewRef} pathLength={pathLength}>
      <svg
        className={inView ? "animated visible" : "animated"}
        viewBox="0 0 150 75"
        {...props}
      >
        <path
          ref={pathRef}
          d="m 18.4,64.775511 c 7.433309,-4.459985 0.329283,0.112084 3.755102,-2.628571 3.11469,-2.491752 -1.142708,1.193172 1.877551,-0.938776 0.798676,-0.563771 1.528129,-1.221659 2.253062,-1.877551 1.134628,-1.026568 2.424541,-2.339424 3.379592,-3.567347 0.224045,-0.288058 0.339219,-0.650717 0.563265,-0.938775 1.347099,-1.731984 3.060275,-3.260881 4.318367,-5.069388 1.837122,-2.640863 3.385335,-5.606014 4.881633,-8.44898 0.300105,-0.570199 0.710253,-1.087328 0.938776,-1.689796 1.018722,-2.685722 1.877551,-6.072031 1.877551,-9.012245 0,-2.199277 -0.521802,-4.685827 -1.126531,-6.759184 -0.411363,-1.410387 -0.544405,-1.088811 -1.126531,-2.253061 -0.819863,-1.639727 -0.264071,-1.26099 -1.689796,-2.816326 -0.270789,-0.295407 -0.637188,-0.487132 -0.938775,-0.751021 -1.391479,-1.217544 -2.420716,-1.86231 -4.318367,-1.689796 -0.51743,0.04704 -2.51234,0.194459 -3.004082,0.563265 -0.767475,0.575607 -1.325291,1.826661 -1.689796,2.628572 -0.142239,0.312925 -0.88188,1.721088 -0.938776,1.877551 -0.396412,1.090133 -0.187755,3.593315 -0.187755,4.130612 0,1.40737 0.02215,2.722949 0.187755,4.130613 0.148383,1.261249 0.472608,2.485896 0.563266,3.755102 0.02675,0.374556 -0.04387,0.753592 0,1.12653 0.177605,1.509647 0.624394,2.986606 0.75102,4.506123 0.150354,1.804243 0.0077,3.644277 0.187755,5.444898 0.02568,0.256764 0.166326,0.493867 0.187755,0.75102 0.295417,3.545001 0.187755,7.139733 0.187755,10.702041 0,1.055841 0.07043,1.948152 0.187756,3.004082 0.05661,0.509489 -0.162052,1.203641 0,1.689796 0.02799,0.08397 0.166288,0.101889 0.187755,0.187755 0.04554,0.182149 -0.05937,0.385145 0,0.563265 0.01979,0.05937 0.159766,-0.05598 0.187755,0 0.139944,0.279889 0,0.625851 0,0.938776 0,0.438095 0,0.87619 0,1.314286 0,0.187755 0,0.37551 0,0.563265 0,0.06259 -0.06259,0.187755 0,0.187755 0.187755,0 0,-0.37551 0,-0.563265 0,-0.761905 0,-0.364626 0,-1.126531 0,-0.813605 0,-1.627211 0,-2.440816 0,-0.558029 -0.183578,-2.824682 0,-3.191837 0.139944,-0.279889 0.464309,-0.454154 0.563265,-0.75102 0.222072,-0.666217 -0.304262,-0.095 0.187755,-0.751021 0.10621,-0.141614 0.296346,-0.217181 0.37551,-0.37551 0.05598,-0.111956 -0.04649,-0.259293 0,-0.37551 0.263603,-0.659007 1.034093,-1.283473 1.689796,-1.502041 0.118747,-0.03958 0.263555,0.05598 0.375511,0 0.886614,-0.443308 -1.145985,0.09874 0.75102,-0.37551 0.220931,-0.05523 0.551609,0.09971 0.75102,0 0.07916,-0.03958 0.100966,-0.170397 0.187755,-0.187755 0.556147,-0.11123 1.853198,-0.146905 2.440817,0 0.398159,0.09954 0.45189,0.363845 0.75102,0.563265 0.351618,0.234412 0.587158,0.141098 0.938776,0.37551 0.253536,0.169024 0.253778,0.380667 0.37551,0.563265 0.17358,0.26037 0.341994,0.529749 0.563265,0.751021 0.04425,0.04425 0.143501,-0.04425 0.187755,0 0.335747,0.335746 0.02687,0.616996 0.187756,0.938775 0.42964,0.859282 -0.07782,-0.796723 0.37551,0.563266 0.05002,0.150051 -0.10591,0.64511 0,0.75102 0.04425,0.04425 0.143501,-0.04425 0.187755,0 0.0561,0.0561 -0.006,0.726849 0,0.751021 0.108055,0.43222 0.195233,0.953731 0.37551,1.314285 0.144504,0.289008 0,3.992858 0,4.506123 1.035333,-0.430546 1.34942,0.324636 2.065306,0.563265 1.001873,0.333958 4.723024,-0.281254 5.257143,-0.37551 2.273644,-0.401231 -1.539614,0.03219 1.314286,-0.37551 1.15677,-0.165253 2.253998,-0.563578 3.379592,-0.938776 0.844968,-0.281656 1.817669,-0.390619 2.628571,-0.75102 0.461974,-0.205322 2.265969,-1.424298 2.628572,-1.877551 0.123634,-0.154543 0.09164,-0.39026 0.187755,-0.563266 0.572359,-1.030245 1.575265,-2.074692 1.314286,-3.379592 -0.194332,-0.971659 -0.181179,0.22064 -0.375511,-0.75102 -0.03682,-0.184109 0.03682,-0.379156 0,-0.563265 -0.06432,-0.321612 -0.692717,-1.009925 -0.75102,-1.126531 -0.05598,-0.111955 0.0751,-0.275374 0,-0.37551 -0.135392,-0.180523 -0.403704,-0.215949 -0.563265,-0.37551 -0.09896,-0.09896 -0.0888,-0.276555 -0.187755,-0.375511 -0.49421,-0.494209 -1.245101,-0.62453 -1.877552,-0.75102 -1.133166,-0.226633 -2.269615,-0.277494 -3.379591,0 -0.750197,0.187549 -0.0029,0.189196 -0.751021,0.563265 -0.111955,0.05598 -0.263555,-0.05598 -0.37551,0 -0.47767,0.238835 -1.558567,1.399076 -1.877551,1.877551 -0.446883,0.670325 -0.479183,1.340406 -0.751021,2.065307 -0.940941,2.509177 -0.49157,2.236025 0,4.693877 0.05061,0.253034 0.151263,0.495569 0.187756,0.751021 0.02655,0.185868 -0.08397,0.395332 0,0.563265 0.33683,0.67366 2.332466,1.507578 2.628571,1.689796 1.279488,0.787377 0.21273,0.460602 1.877551,1.126531 0.239589,0.09584 0.51384,0.08611 0.751021,0.187755 0.207408,0.08889 0.346294,0.313518 0.563265,0.37551 0.541593,0.154741 1.12653,0 1.689796,0 1.561049,0 3.162695,0.06744 4.693877,-0.187755 0.939163,-0.156527 1.723324,-0.569971 2.628572,-0.751021 0.463777,-0.09275 0.611633,-0.27253 1.126531,-0.37551 0.184109,-0.03682 0.407043,0.104148 0.563265,0 0.510022,-0.340014 0.93468,-0.655095 1.502041,-0.938775 0.50068,-0.312925 1.0297,-0.58452 1.502041,-0.938776 0.45345,-0.340088 1.670564,-1.816922 1.877551,-2.065306 3.132333,-3.7588 4.991932,-8.456643 6.759183,-12.955102 0.420724,-1.070934 0.962188,-2.096422 1.314286,-3.191837 0.214121,-0.666155 0.191401,-1.39024 0.37551,-2.065306 0.517477,-1.897416 1.504882,-3.686489 1.877551,-5.632653 0.596011,-3.112502 1.201586,-6.232978 1.502041,-9.387756 0.04747,-0.498425 -0.03123,-1.002335 0,-1.502041 0.07442,-1.190658 0.308038,-2.364519 0.187755,-3.567347 -0.06351,-0.635077 -0.305028,-1.24321 -0.37551,-1.877551 -0.02764,-0.248809 0.07194,-0.511238 0,-0.75102 -0.156462,-0.521542 -0.730159,-1.32124 -0.938775,-1.877551 -0.09061,-0.241615 -0.05973,-0.526975 -0.187756,-0.751021 -0.131737,-0.23054 -0.415978,-0.342334 -0.563265,-0.563265 -0.109781,-0.164672 -0.06901,-0.404936 -0.187755,-0.563265 -0.263518,-0.351358 -1.098697,-0.616573 -1.502041,-0.751021 -0.722563,-0.240854 -1.29296,-0.187755 -2.065306,-0.187755 -1.53238,0 -0.768245,0.01148 -1.877551,0.751021 -2.200368,1.466912 0.724407,-0.912163 -1.314286,1.12653 -0.79534,0.795341 -1.968316,1.638189 -2.628571,2.628572 -1.299257,1.948885 -2.73817,4.741486 -3.004082,7.134694 -0.0907,0.816289 0,1.813382 0,2.628571 0,1.332272 -0.18769,2.81678 0,4.130613 0.115077,0.805537 0.27319,1.62225 0.37551,2.440816 0.05392,0.431355 -0.05392,0.88293 0,1.314286 0.377787,3.022292 0.01242,-2.091609 0.375511,2.628571 0.119647,1.555422 -0.119648,3.138456 0,4.693878 0.08545,1.110808 0.14055,2.470868 0.37551,3.567347 0.09547,0.445512 0.300606,0.864859 0.37551,1.314286 0.102889,0.617335 -0.048,1.253544 0,1.877551 0.06258,0.813605 0.09764,1.629798 0.187755,2.440816 0.05699,0.512933 0.311497,0.989937 0.37551,1.502041 0.138001,1.104005 -0.03177,2.281981 0.187755,3.379592 0.02745,0.137227 0.16031,0.238283 0.187755,0.37551 0.165225,0.826121 -0.03747,1.427095 0.375511,2.253061 0.06436,0.128724 0.59876,0.97427 0.75102,1.126531 0.04425,0.04425 0.153039,-0.05207 0.187755,0 0.109782,0.164672 0.06901,0.404936 0.187755,0.563265 0.01415,0.01887 0.889394,0.72633 0.938776,0.751021 0.111955,0.05598 0.263555,-0.05598 0.37551,0 0.225306,0.112653 0.337959,0.450612 0.563265,0.563265 0.303046,0.151523 0.784889,0.449385 1.126531,0.563265 0.226178,0.07539 0.149332,-0.07539 0.37551,0 0.265526,0.08851 0.476567,0.32062 0.751021,0.37551 0.184109,0.03682 0.381116,-0.04554 0.563265,0 0.08587,0.02147 0.101889,0.166289 0.187755,0.187756 0.950646,0.237661 2.865394,0 3.942857,0 0.438095,0 0.886623,0.09504 1.314286,0 0.172802,-0.0384 0.243934,-0.257092 0.37551,-0.375511 0.494505,-0.445054 0.990953,-0.888378 1.502041,-1.314285 0.858158,-0.715132 1.470046,-1.470047 2.253061,-2.253062 0.221272,-0.221271 0.544958,-0.327765 0.751021,-0.563265 0.240308,-0.274638 0.321819,-0.665137 0.563265,-0.938776 1.054066,-1.194607 2.200753,-2.307919 3.379592,-3.379591 0.296523,-0.269567 0.669209,-0.454497 0.938776,-0.751021 1.204068,-1.324475 2.117851,-2.886387 3.191836,-4.318367 0.162507,-0.216676 1.869925,-2.468982 2.065306,-2.816327 0.302193,-0.537231 0.475362,-1.138479 0.751021,-1.689796 0.475811,-0.951622 0.997624,-1.879553 1.502041,-2.816326 1.750419,-3.250779 3.603789,-6.529427 4.506119,-10.138776 0.4381,-1.752381 0.97317,-3.483332 1.31429,-5.257143 0.15578,-0.810043 0.0789,-3.638503 0,-4.506123 -0.16345,-1.797885 -1.30914,-6.218332 -2.81633,-7.510204 -0.21251,-0.182149 -0.52326,-0.212828 -0.75102,-0.37551 -0.5148,-0.367715 -0.95541,-0.986306 -1.50204,-1.314286 -0.611026,-0.366616 -0.410248,-0.09967 -0.938774,-0.187755 -0.398279,-0.06638 -1.432623,-0.410219 -1.877551,-0.187755 -0.05598,0.02799 0.05937,0.167964 0,0.187755 -0.178121,0.05937 -0.385146,-0.05937 -0.563266,0 -0.05937,0.01979 0.04426,0.143501 0,0.187755 -0.159561,0.159561 -0.361434,0.274595 -0.563265,0.375511 -0.177017,0.08851 -0.408723,0.06412 -0.563265,0.187755 -0.176206,0.140964 -0.215949,0.403704 -0.375511,0.563265 -0.221271,0.221271 -0.547371,0.325675 -0.75102,0.563265 -0.182149,0.212508 -0.212828,0.523266 -0.37551,0.751021 -0.154334,0.216067 -0.400248,0.353672 -0.563266,0.563265 -0.522355,0.6716 -1.746537,2.426791 -2.065306,3.191837 -0.146419,0.351406 -0.06737,0.765376 -0.187755,1.12653 -0.132763,0.398289 -0.401791,0.738993 -0.563265,1.126531 -0.357844,0.858825 -0.683177,1.733976 -0.938776,2.628572 -0.62144,2.175042 -0.919526,5.714389 -0.75102,8.073469 0.06306,0.882837 0.326414,1.744848 0.37551,2.628572 0,6.056122 -0.09736,-0.897127 0.187755,3.379591 0.05828,0.87425 -0.07933,1.75598 0,2.628572 0.09136,1.005009 0.279834,1.999474 0.37551,3.004082 0.202118,2.122233 0.351474,4.265751 0.563266,6.383673 0.162365,1.623652 0.254643,0.252304 0.37551,2.065306 0.03747,0.562018 -0.08565,1.133081 0,1.689796 0.04256,0.276634 0.287002,0.485495 0.37551,0.751021 0.185483,0.556448 0.02801,1.544052 0.37551,2.065306 0.03472,0.05207 0.15304,-0.05207 0.187756,0 0.212994,0.319491 0.162515,0.619284 0.37551,0.938775 0.324309,0.486464 1.711815,1.888561 2.065306,2.065307 0.781392,0.390695 -0.200717,-0.01296 0.187755,0.37551 0.388472,0.388472 -0.01519,-0.593637 0.37551,0.187755 0.02799,0.05598 -0.04425,0.143501 0,0.187755 0.189313,0.189312 0.711484,0.148218 0.938776,0.37551 0.09896,0.09896 0.07131,0.297883 0.187755,0.37551 0.104148,0.06943 0.256763,-0.03958 0.37551,0 0.265526,0.08851 0.49115,0.271563 0.75102,0.375511 0.42942,0.171767 1.041004,0.221831 1.502041,0.37551 0.158343,0.05278 0.414995,-0.07414 0.563266,0 0.46552,0.23276 0.723265,0.08 0.938774,0.187755 0.76622,0.383108 0.77167,0.37551 1.6898,0.37551 4.73561,-0.2658 9.57983,0.781593 14.26939,0 1.02736,-0.171227 2.17017,0.204332 3.19183,0 0.13723,-0.02745 0.23747,-0.164748 0.37551,-0.187755 0.24694,-0.04116 0.50664,0.05431 0.75102,0 0.55199,0.10928 0.85189,-0.447665 1.31429,-0.563265 0.18215,-0.04554 0.40704,0.104147 0.56326,0 0.68246,-0.45497 1.59504,-1.172154 2.06531,-1.877551 0.70179,-1.052684 0.7237,-2.57221 0.93878,-3.755102 0.15465,-0.850596 0.4968,-2.155054 0.37551,-3.004082 -0.0698,-0.488534 -0.40741,-1.034472 -0.56327,-1.502041 -0.12483,-0.374496 -0.4029,-1.245462 -0.56327,-1.502041 -0.14072,-0.225165 -0.42665,-0.335579 -0.56326,-0.563265 -0.0644,-0.107333 0.0694,-0.271363 0,-0.37551 -0.0925,-0.1388 -0.93919,-0.626124 -1.12653,-0.751021 -1.74763,-1.165087 -3.12541,-1.3475 -5.06939,-0.37551 -0.17183,0.08592 -0.62363,-0.127392 -0.75102,0 -0.0442,0.04425 0.0443,0.143501 0,0.187755 -0.0442,0.04425 -0.13178,-0.02799 -0.18775,0 -0.29725,0.148624 -0.47326,0.565844 -0.75102,0.751021 -0.52032,0.346878 -1.00579,0.729528 -1.50205,1.12653 -0.929,0.743205 0.22485,-0.0371 -0.75102,0.938776 -0.099,0.09896 -0.25034,0.12517 -0.37551,0.187755 -0.18775,0.12517 -0.4037,0.215949 -0.56326,0.37551 -0.5312,0.531193 -1.46965,1.780364 -1.6898,2.440816 -0.30413,0.912384 -0.18052,2.083389 0.18776,3.004082 0.11621,0.290544 0.44705,0.460477 0.56326,0.75102 0.0465,0.116218 0,0.250341 0,0.375511 0.0626,0.187755 0.0992,0.386248 0.18776,0.563265 0.49936,0.998734 0.62454,0.541531 0.93877,0.75102 0.11403,0.07602 0.79913,1.104805 0.93878,1.314286 0.24529,0.367933 0.81662,0.441109 1.12653,0.751021 0.11501,0.115014 0.15984,0.491375 0.37551,0.563265 0.11875,0.03958 0.25676,-0.03958 0.37551,0 0.70539,-0.439561 0.59257,0.447864 0.93878,0.563265 0.67118,0.223728 3.66417,0.656161 4.50612,0.37551 0.26552,-0.08851 0.48549,-0.287001 0.75102,-0.37551 0.11875,-0.03958 0.26355,0.05598 0.37551,0 0.38274,-0.191372 0.25138,-0.25138 0.56326,-0.563265 0.10883,-0.108823 0.6422,-0.266688 0.75102,-0.37551 0.099,-0.09896 0.11013,-0.25907 0.18776,-0.375511 0.19261,-0.28892 0.57214,-0.452887 0.75102,-0.75102 0.2432,-0.405333 0.35138,-0.890525 0.56327,-1.314286 0.11874,-0.237493 0.41597,-0.342334 0.56326,-0.563265 0.22755,-0.341329 0,-1.638233 0,-2.065306 0,-1.689796 0,-3.379592 0,-5.069388 0,-0.637858 -0.29936,-1.370088 -0.93877,-1.689796 -0.19743,-0.09871 -0.71326,0 -0.93878,0 -0.12517,0 -0.287,-0.08851 -0.37551,0 -0.4982,0.498202 1.72587,1.651875 1.87755,1.689796 0.25034,0.06258 1.2517,0.06258 1.50204,0 0.21892,-0.05473 0.36144,-0.274595 0.56327,-0.37551 0.68226,-0.34113 1.52149,-0.770474 2.0653,-1.314286 0.15956,-0.159561 0.21595,-0.403704 0.37551,-0.563265 0.22127,-0.221272 0.51552,-0.357203 0.75102,-0.563266 0.92703,-0.811145 1.75642,-1.756419 2.62857,-2.628571"
          fill="none"
          stroke="#fff"
          strokeWidth={3}
        />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .animated {
    width: 100%;
    height: 75%;
    stroke-dasharray: ${(props) => props.pathLength};
    stroke-dashoffset: ${(props) => props.pathLength};
  }
  .animated.visible {
    animation: draw 2s linear forwards;
  }
  @keyframes draw {
    from {
      stroke-dashoffset: ${(props) => props.pathLength};
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export default SvgComponent;
