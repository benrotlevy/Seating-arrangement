import { useEffect, useState } from "react";
import { guestsAPI } from "../../api/api";
import "./mapTables.css";

const MapTables = () => {

    const [tables, setTables] = useState({
            1: {numOfChairs:14,
                map: []
            },
            2: {numOfChairs:14,
                map: []
            },
            3: {numOfChairs:18,
                map: []
            },
            4: {numOfChairs:18,
                map: []
            },
            5: {numOfChairs:18,
                map: []
            },
            6: {numOfChairs:10,
                map: []
            },
            7: {numOfChairs:10,
                map: []
            },
            8: {numOfChairs:10,
                map: []
            },
            9: {numOfChairs:10,
                map: []
            },
            10: {numOfChairs:12,
                map: []
            },
            11: {numOfChairs:12,
                map: []
            },
            12: {numOfChairs:12,
                map: []
            },
            13: {numOfChairs:12,
                map: []
            },
            14: {numOfChairs:12,
                map: []
            },
            15: {numOfChairs:12,
                map: []
            },
            16: {numOfChairs:12,
                map: []
            },
            17: {numOfChairs:12,
                map: []
            },
            18: {numOfChairs:12,
                map: []
            },
            19: {numOfChairs:12,
                map: []
            },
            20: {numOfChairs:12,
                map: []
            },
            21: {numOfChairs:12,
                map: []
            },
            22: {numOfChairs:12,
                map: []
            },
            23: {numOfChairs:12,
                map: []
            },
            24: {numOfChairs:12,
                map: []
            },
            25: {numOfChairs:12,
                map: []
            },
            26: {numOfChairs:12,
                map: []
            },
            27: {numOfChairs:12,
                map: []
            },
            28: {numOfChairs:12,
                map: []
            },
            29: {numOfChairs:12,
                map: []
            },
            30: {numOfChairs:12,
                map: []
            },
            31: {numOfChairs:12,
                map: []
            },
        });

    useEffect(()=> {
        const getData = async() => {
            try {
                const {data} = await guestsAPI.get("/");
                extractTablesData(data);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, [])

    const extractTablesData = (guestsList) => {
        const tables = {};
        guestsList.forEach(guest => {
            if(tables[guest.table]) {
                tables[guest.table].push(guest);
            } else {
                tables[guest.table] = [guest];
            }
        })
        organizeAvailableChairs(tables);
    }

    const organizeAvailableChairs = (tables) => {
        const availableChairs = {
            1: {numOfChairs:14,
                map: []
            },
            2: {numOfChairs:14,
                map: []
            },
            3: {numOfChairs:18,
                map: []
            },
            4: {numOfChairs:18,
                map: []
            },
            5: {numOfChairs:18,
                map: []
            },
            6: {numOfChairs:10,
                map: []
            },
            7: {numOfChairs:10,
                map: []
            },
            8: {numOfChairs:10,
                map: []
            },
            9: {numOfChairs:10,
                map: []
            },
            10: {numOfChairs:12,
                map: []
            },
            11: {numOfChairs:12,
                map: []
            },
            12: {numOfChairs:12,
                map: []
            },
            13: {numOfChairs:12,
                map: []
            },
            14: {numOfChairs:12,
                map: []
            },
            15: {numOfChairs:12,
                map: []
            },
            16: {numOfChairs:12,
                map: []
            },
            17: {numOfChairs:12,
                map: []
            },
            18: {numOfChairs:12,
                map: []
            },
            19: {numOfChairs:12,
                map: []
            },
            20: {numOfChairs:12,
                map: []
            },
            21: {numOfChairs:12,
                map: []
            },
            22: {numOfChairs:12,
                map: []
            },
            23: {numOfChairs:12,
                map: []
            },
            24: {numOfChairs:12,
                map: []
            },
            25: {numOfChairs:12,
                map: []
            },
            26: {numOfChairs:12,
                map: []
            },
            27: {numOfChairs:12,
                map: []
            },
            28: {numOfChairs:12,
                map: []
            },
            29: {numOfChairs:12,
                map: []
            },
            30: {numOfChairs:12,
                map: []
            },
            31: {numOfChairs:12,
                map: []
            },
        }
        for(let key in tables) {
            availableChairs[key].guests = [...tables[key]];
            for(let i=0; i<tables[key].length; i++) {
                availableChairs[key].map.push(true);
            }
        }
        pushFalse(availableChairs);
    }

    const pushFalse = (chairs) => {
        for(let key in chairs) {
            for(let i=chairs[key].map.length; i<chairs[key].numOfChairs; i++) {
                chairs[key].map.push(false);
            }
        }
        // console.log(chairs);
        setTables(chairs);
    }

    const isFull = (id) => {
        if(!tables[id].map[0]) return false;
        const res= tables[id].map.find(bool => bool===false);
        if(res === false) return false;
        return true;
    }

    return (
        <div>
            <svg id="e1HCkc54Xxi1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 890 650" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
            <defs>
            <linearGradient id="e1HCkc54Xxi444-fill" x1="0" y1="0.5" x2="1" y2="0.5" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0 0)">
            <stop id="e1HCkc54Xxi444-fill-0" offset="0%" stopColor="#000"/><stop id="e1HCkc54Xxi444-fill-1" offset="100%" stopColor="#fff"/>
            </linearGradient>
            </defs>
            <ellipse data-table={31} rx="4.904274" ry="4.495203" transform="translate(158.965221 225.784579)" fill={tables[31].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={30} rx="4.904274" ry="4.495203" transform="translate(75.289754 293.6875)" fill={tables[30].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={29} rx="4.904274" ry="4.495203" transform="translate(789.681577 311.317297)" fill={tables[29].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={28} rx="4.904274" ry="4.495203" transform="translate(790.081053 230.675523)" fill={tables[28].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={27} rx="4.904274" ry="4.495203" transform="translate(791.576256 72.348126)" fill={tables[27].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={26} rx="4.904274" ry="4.495203" transform="translate(716.966139 147.7524)" fill={tables[26].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={25} rx="4.904274" ry="4.495203" transform="translate(716.304281 74.7524)" fill={tables[25].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={24} rx="4.904274" ry="4.495203" transform="translate(791.171982 152.838532)" fill={tables[24].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={23} rx="4.904274" ry="4.495203" transform="translate(76.28016 371.563492)" fill={tables[23].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={22} rx="4.904274" ry="4.495203" transform="translate(130.622282 83.848126)" fill={tables[22].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={21} rx="4.904274" ry="4.495203" transform="translate(75.025074 221.289376)" fill={tables[21].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={20} rx="4.904274" ry="4.495203" transform="translate(75.289754 151.14708)" fill={tables[20].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={19} rx="4.904274" ry="4.495203" transform="translate(159.083906 150.64708)" fill={tables[19].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={18} rx="4.904274" ry="4.495203" transform="translate(241.407199 154.117806)" fill={tables[18].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={17} rx="4.904274" ry="4.495203" transform="translate(241.407199 226.766452)" fill={tables[17].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={16} rx="4.904274" ry="4.495203" transform="translate(643.581053 150.242806)" fill={tables[16].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={15} rx="4.904274" ry="4.495203" transform="translate(720.461342 311.8125)" fill={tables[15].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={14} rx="4.904274" ry="4.495203" transform="translate(717.951748 230.784579)" fill={tables[14].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={13} rx="4.904274" ry="4.495203" transform="translate(644.081053 231.170726)" fill={tables[13].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={12} rx="4.904274" ry="4.495203" transform="translate(760.676779 440.525786)" fill={tables[12].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={11} rx="4.904274" ry="4.495203" transform="translate(74.525074 447.170994)" fill={tables[11].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={10} rx="4.904274" ry="4.495203" transform="translate(160.021759 295.913023)" fill={tables[10].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={5} rx="4.904274" ry="4.495203" transform="matrix(-1 0 0-1 242.902402 372.126309)" fill={tables[5].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={4} rx="4.904274" ry="4.495203" transform="translate(742.488856 378.295465)" fill={tables[4].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={3} rx="4.904274" ry="4.495203" transform="translate(743.508856 506.295466)" fill={tables[3].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={5} rx="4.904274" ry="4.495203" transform="matrix(-1 0 0-1 242.902402 411.126309)" fill={tables[5].map[1]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={4} rx="4.904274" ry="4.495203" transform="translate(742.488856 417.295465)" fill={tables[4].map[1]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={3} rx="4.904274" ry="4.495203" transform="translate(743.508856 545.295466)" fill={tables[3].map[1]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={5} rx="4.904274" ry="4.495203" transform="matrix(-1 0 0-1 254.902402 372.126309)" fill={tables[5].map[2]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={4} rx="4.904274" ry="4.495203" transform="translate(754.488856 378.295465)" fill={tables[4].map[2]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={3} rx="4.904274" ry="4.495203" transform="translate(755.508856 506.295466)" fill={tables[3].map[2]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={5} rx="4.904274" ry="4.495203" transform="matrix(-1 0 0-1 254.902402 411.126309)" fill={tables[5].map[3]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={4} rx="4.904274" ry="4.495203" transform="translate(754.488856 417.295465)" fill={tables[4].map[3]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={3} rx="4.904274" ry="4.495203" transform="translate(755.508856 545.295466)" fill={tables[3].map[3]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={5} rx="4.904274" ry="4.495203" transform="matrix(-1 0 0-1 266.902402 372.126309)" fill={tables[5].map[4]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={4} rx="4.904274" ry="4.495203" transform="translate(766.488856 378.295465)" fill={tables[4].map[4]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={3} rx="4.904274" ry="4.495203" transform="translate(767.508856 506.295466)" fill={tables[3].map[4]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={5} rx="4.904274" ry="4.495203" transform="matrix(-1 0 0-1 266.902402 411.126309)" fill={tables[5].map[5]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={4} rx="4.904274" ry="4.495203" transform="translate(766.488856 417.295465)" fill={tables[4].map[5]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={3} rx="4.904274" ry="4.495203" transform="translate(767.508856 545.295466)" fill={tables[3].map[5]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={5} rx="4.904274" ry="4.495203" transform="matrix(-1 0 0-1 278.902402 372.126309)" fill={tables[5].map[6]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={4} rx="4.904274" ry="4.495203" transform="translate(778.488856 378.295465)" fill={tables[4].map[6]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={3} rx="4.904274" ry="4.495203" transform="translate(779.508856 506.295466)" fill={tables[3].map[6]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={5} rx="4.904274" ry="4.495203" transform="matrix(-1 0 0-1 278.902402 411.126309)" fill={tables[5].map[7]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={4} rx="4.904274" ry="4.495203" transform="translate(778.488856 417.295465)" fill={tables[4].map[7]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={3} rx="4.904274" ry="4.495203" transform="translate(779.508856 545.295466)" fill={tables[3].map[7]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={5} rx="4.904274" ry="4.495203" transform="matrix(-1 0 0-1 290.902402 371.947557)" fill={tables[5].map[8]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={4} rx="4.904274" ry="4.495203" transform="translate(790.488856 378.116714)" fill={tables[4].map[8]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={3} rx="4.904274" ry="4.495203" transform="translate(791.508856 506.116714)" fill={tables[3].map[8]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={5} rx="4.904274" ry="4.495203" transform="matrix(-1 0 0-1 290.902402 410.947559)" fill={tables[5].map[9]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={4} rx="4.904274" ry="4.495203" transform="translate(790.488856 417.116715)" fill={tables[4].map[9]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={3} rx="4.904274" ry="4.495203" transform="translate(791.508856 545.116715)" fill={tables[3].map[9]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={5} rx="4.904274" ry="4.495203" transform="matrix(-1 0 0-1 302.902402 372.126309)" fill={tables[5].map[10]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={4} rx="4.904274" ry="4.495203" transform="translate(802.488856 378.295465)" fill={tables[4].map[10]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={3} rx="4.904274" ry="4.495203" transform="translate(803.508856 506.295466)" fill={tables[3].map[10]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={2} rx="4.904274" ry="4.495203" transform="translate(285.215747 298.413023)" fill={tables[2].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={1} rx="4.904274" ry="4.495203" transform="translate(673.816374 314.88484)" fill={tables[1].map[0]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={2} rx="4.904274" ry="4.495203" transform="translate(285.215747 337.413023)" fill={tables[2].map[1]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={1} rx="4.904274" ry="4.495203" transform="translate(673.816374 353.88484)" fill={tables[1].map[1]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={2} rx="4.904274" ry="4.495203" transform="translate(273.215747 298.413023)" fill={tables[2].map[2]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={1} rx="4.904274" ry="4.495203" transform="translate(661.816374 314.88484)" fill={tables[1].map[2]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={2} rx="4.904274" ry="4.495203" transform="translate(273.215747 337.413023)" fill={tables[2].map[3]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={1} rx="4.904274" ry="4.495203" transform="translate(661.816374 353.88484)" fill={tables[1].map[3]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={2} rx="4.904274" ry="4.495203" transform="translate(261.215747 298.413023)" fill={tables[2].map[4]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={1} rx="4.904274" ry="4.495203" transform="translate(649.816374 314.88484)" fill={tables[1].map[4]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={2} rx="4.904274" ry="4.495203" transform="translate(261.215747 337.413023)" fill={tables[2].map[5]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={1} rx="4.904274" ry="4.495203" transform="translate(649.816374 353.88484)" fill={tables[1].map[5]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={2} rx="4.904274" ry="4.495203" transform="translate(249.215747 298.413023)" fill={tables[2].map[6]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={1} rx="4.904274" ry="4.495203" transform="translate(637.816374 314.88484)" fill={tables[1].map[6]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={2} rx="4.904274" ry="4.495203" transform="translate(249.215747 337.413023)" fill={tables[2].map[7]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={1} rx="4.904274" ry="4.495203" transform="translate(637.816374 353.88484)" fill={tables[1].map[7]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={5} rx="4.904274" ry="4.495203" transform="matrix(-1 0 0-1 302.902402 411.126309)" fill={tables[5].map[11]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={4} rx="4.904274" ry="4.495203" transform="translate(802.488856 417.295465)" fill={tables[4].map[11]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={3} rx="4.904274" ry="4.495203" transform="translate(803.508856 545.295466)" fill={tables[3].map[11]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={5} rx="4.904274" ry="4.495203" transform="matrix(-.000259-1 1-.000259 311.902402 381.126309)" fill={tables[5].map[12]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={4} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 811.488856 387.295465)" fill={tables[4].map[12]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={3} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 812.508856 515.295466)" fill={tables[3].map[12]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={2} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 240.215747 307.413023)" fill={tables[2].map[8]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={1} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 628.816374 323.88484)" fill={tables[1].map[8]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={2} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 293.215747 307.413023)" fill={tables[2].map[9]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={1} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 681.816374 323.88484)" fill={tables[1].map[9]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={5} rx="4.904274" ry="4.495203" transform="matrix(-.000259-1 1-.000259 232.902402 381.126309)" fill={tables[5].map[13]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={4} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 732.488856 387.295465)" fill={tables[4].map[13]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={3} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 733.508856 515.295466)" fill={tables[3].map[13]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={5} rx="4.904274" ry="4.495203" transform="matrix(-.000259-1 1-.000259 311.902402 392.126309)" fill={tables[5].map[14]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={4} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 811.488856 398.295465)" fill={tables[4].map[14]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={3} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 812.508856 526.295466)" fill={tables[3].map[14]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={2} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 240.215747 318.413023)" fill={tables[2].map[10]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={1} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 628.816374 334.88484)" fill={tables[1].map[10]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={2} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 293.215747 318.413023)" fill={tables[2].map[11]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={1} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 681.816374 334.88484)" fill={tables[1].map[11]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={5} rx="4.904274" ry="4.495203" transform="matrix(-.000259-1 1-.000259 232.902402 392.126309)" fill={tables[5].map[15]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={4} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 732.488856 398.295465)" fill={tables[4].map[15]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={3} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 733.508856 526.295466)" fill={tables[3].map[15]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={5} rx="4.904274" ry="4.495203" transform="matrix(-.000259-1 1-.000259 311.902402 403.126309)" fill={tables[5].map[16]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={4} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 811.488856 409.295465)" fill={tables[4].map[16]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={3} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 812.508856 537.295466)" fill={tables[3].map[16]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={2} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 240.215747 329.413023)" fill={tables[2].map[12]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={1} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 628.816374 345.88484)" fill={tables[1].map[12]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={2} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 293.215747 329.413023)" fill={tables[2].map[13]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={1} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 681.816374 345.88484)" fill={tables[1].map[13]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={5} rx="4.904274" ry="4.495203" transform="matrix(-.000259-1 1-.000259 232.902402 403.126309)" fill={tables[5].map[17]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={4} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 732.488856 409.295465)" fill={tables[4].map[17]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={3} rx="4.904274" ry="4.495203" transform="matrix(.000259 1-1 0.000259 733.508856 537.295466)" fill={tables[3].map[17]? "#003B5D" :"#d2dbed"} stroke="#0c0606"/>
            <ellipse data-table={31} rx="4.904274" ry="4.495203" transform="translate(158.965221 263.784579)" fill={tables[31].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={30} rx="4.904274" ry="4.495203" transform="translate(75.289754 332.6875)" fill={tables[30].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={29} rx="4.904274" ry="4.495203" transform="translate(789.681577 350.317297)" fill={tables[29].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={28} rx="4.904274" ry="4.495203" transform="translate(790.081053 269.675523)" fill={tables[28].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={27} rx="4.904274" ry="4.495203" transform="translate(791.576256 111.348126)" fill={tables[27].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={26} rx="4.904274" ry="4.495203" transform="translate(716.966139 186.7524)" fill={tables[26].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={25} rx="4.904274" ry="4.495203" transform="translate(716.304281 113.7524)" fill={tables[25].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={24} rx="4.904274" ry="4.495203" transform="translate(791.171982 191.838532)" fill={tables[24].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={23} rx="4.904274" ry="4.495203" transform="translate(76.28016 410.563492)" fill={tables[23].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={22} rx="4.904274" ry="4.495203" transform="translate(130.622282 122.848126)" fill={tables[22].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={21} rx="4.904274" ry="4.495203" transform="translate(75.025074 260.289376)" fill={tables[21].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={20} rx="4.904274" ry="4.495203" transform="translate(75.289754 190.14708)" fill={tables[20].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={19} rx="4.904274" ry="4.495203" transform="translate(159.083906 189.64708)" fill={tables[19].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={18} rx="4.904274" ry="4.495203" transform="translate(241.407199 193.117806)" fill={tables[18].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={17} rx="4.904274" ry="4.495203" transform="translate(241.407199 265.766452)" fill={tables[17].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={16} rx="4.904274" ry="4.495203" transform="translate(643.581053 189.242806)" fill={tables[16].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={15} rx="4.904274" ry="4.495203" transform="translate(720.461342 350.8125)" fill={tables[15].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={14} rx="4.904274" ry="4.495203" transform="translate(717.951748 269.784579)" fill={tables[14].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={13} rx="4.904274" ry="4.495203" transform="translate(644.081053 270.170726)" fill={tables[13].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={12} rx="4.904274" ry="4.495203" transform="translate(760.676779 479.525786)" fill={tables[12].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={11} rx="4.904274" ry="4.495203" transform="translate(74.525074 486.170994)" fill={tables[11].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={10} rx="4.904274" ry="4.495203" transform="translate(160.021759 334.913023)" fill={tables[10].map[1]? "#003B5D" :"#d2dbed"} stroke="#030303"/>
            <ellipse data-table={31} rx="4.904274" ry="4.495203" transform="translate(170.965221 225.784579)" fill={tables[31].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={30} rx="4.904274" ry="4.495203" transform="translate(87.289754 293.6875)" fill={tables[30].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={29} rx="4.904274" ry="4.495203" transform="translate(801.681577 311.317297)" fill={tables[29].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={28} rx="4.904274" ry="4.495203" transform="translate(802.081053 230.675523)" fill={tables[28].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={27} rx="4.904274" ry="4.495203" transform="translate(803.576256 72.348126)" fill={tables[27].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={26} rx="4.904274" ry="4.495203" transform="translate(728.966139 147.7524)" fill={tables[26].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={25} rx="4.904274" ry="4.495203" transform="translate(728.304281 74.7524)" fill={tables[25].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={24} rx="4.904274" ry="4.495203" transform="translate(803.171982 152.838532)" fill={tables[24].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={23} rx="4.904274" ry="4.495203" transform="translate(88.28016 371.563492)" fill={tables[23].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={22} rx="4.904274" ry="4.495203" transform="translate(142.622282 83.848126)" fill={tables[22].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={21} rx="4.904274" ry="4.495203" transform="translate(87.025074 221.289376)" fill={tables[21].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={20} rx="4.904274" ry="4.495203" transform="translate(87.289754 151.14708)" fill={tables[20].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={19} rx="4.904274" ry="4.495203" transform="translate(171.083906 150.64708)" fill={tables[19].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={18} rx="4.904274" ry="4.495203" transform="translate(253.407199 154.117806)" fill={tables[18].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={17} rx="4.904274" ry="4.495203" transform="translate(253.407199 226.766452)" fill={tables[17].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={16} rx="4.904274" ry="4.495203" transform="translate(655.581053 150.242806)" fill={tables[16].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={15} rx="4.904274" ry="4.495203" transform="translate(732.461342 311.8125)" fill={tables[15].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={14} rx="4.904274" ry="4.495203" transform="translate(729.951748 230.784579)" fill={tables[14].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={13} rx="4.904274" ry="4.495203" transform="translate(656.081053 231.170726)" fill={tables[13].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={12} rx="4.904274" ry="4.495203" transform="translate(772.676779 440.525786)" fill={tables[12].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={11} rx="4.904274" ry="4.495203" transform="translate(86.525074 447.170994)" fill={tables[11].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={10} rx="4.904274" ry="4.495203" transform="translate(172.021759 295.913023)" fill={tables[10].map[2]? "#003B5D" :"#d2dbed"} stroke="#0b0a0a"/>
            <ellipse data-table={31} rx="4.904274" ry="4.495203" transform="translate(170.965221 264.784579)" fill={tables[31].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={30} rx="4.904274" ry="4.495203" transform="translate(87.289754 332.6875)" fill={tables[30].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={29} rx="4.904274" ry="4.495203" transform="translate(801.681577 350.317297)" fill={tables[29].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={28} rx="4.904274" ry="4.495203" transform="translate(802.081053 269.675523)" fill={tables[28].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={27} rx="4.904274" ry="4.495203" transform="translate(803.576256 111.348126)" fill={tables[27].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={26} rx="4.904274" ry="4.495203" transform="translate(728.966139 186.7524)" fill={tables[26].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={25} rx="4.904274" ry="4.495203" transform="translate(728.304281 113.7524)" fill={tables[25].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={24} rx="4.904274" ry="4.495203" transform="translate(803.171982 191.838532)" fill={tables[24].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={23} rx="4.904274" ry="4.495203" transform="translate(88.28016 410.563492)" fill={tables[23].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={22} rx="4.904274" ry="4.495203" transform="translate(142.622282 122.848126)" fill={tables[22].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={21} rx="4.904274" ry="4.495203" transform="translate(87.025074 260.289376)" fill={tables[21].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={20} rx="4.904274" ry="4.495203" transform="translate(87.289754 190.14708)" fill={tables[20].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={19} rx="4.904274" ry="4.495203" transform="translate(171.083906 189.64708)" fill={tables[19].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={18} rx="4.904274" ry="4.495203" transform="translate(253.407199 193.117806)" fill={tables[18].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={17} rx="4.904274" ry="4.495203" transform="translate(253.407199 265.766452)" fill={tables[17].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={16} rx="4.904274" ry="4.495203" transform="translate(655.581053 189.242806)" fill={tables[16].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={15} rx="4.904274" ry="4.495203" transform="translate(732.461342 350.8125)" fill={tables[15].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={14} rx="4.904274" ry="4.495203" transform="translate(729.951748 269.784579)" fill={tables[14].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={13} rx="4.904274" ry="4.495203" transform="translate(656.081053 270.170726)" fill={tables[13].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={12} rx="4.904274" ry="4.495203" transform="translate(772.676779 479.525786)" fill={tables[12].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={11} rx="4.904274" ry="4.495203" transform="translate(86.525074 486.170994)" fill={tables[11].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={10} rx="4.904274" ry="4.495203" transform="translate(172.021759 334.913023)" fill={tables[10].map[3]? "#003B5D" :"#d2dbed"} stroke="#010101"/>
            <ellipse data-table={31} rx="4.904274" ry="4.495203" transform="translate(182.965221 225.784579)" fill={tables[31].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={30} rx="4.904274" ry="4.495203" transform="translate(99.289754 293.6875)" fill={tables[30].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={29} rx="4.904274" ry="4.495203" transform="translate(813.681577 311.317297)" fill={tables[29].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={28} rx="4.904274" ry="4.495203" transform="translate(814.081053 230.675523)" fill={tables[28].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={27} rx="4.904274" ry="4.495203" transform="translate(815.576256 72.348126)" fill={tables[27].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={26} rx="4.904274" ry="4.495203" transform="translate(740.966139 147.7524)" fill={tables[26].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={25} rx="4.904274" ry="4.495203" transform="translate(740.304281 74.7524)" fill={tables[25].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={24} rx="4.904274" ry="4.495203" transform="translate(815.171982 152.838532)" fill={tables[24].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={23} rx="4.904274" ry="4.495203" transform="translate(100.28016 371.563492)" fill={tables[23].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={22} rx="4.904274" ry="4.495203" transform="translate(154.622282 83.848126)" fill={tables[22].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={21} rx="4.904274" ry="4.495203" transform="translate(99.025074 221.289376)" fill={tables[21].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={20} rx="4.904274" ry="4.495203" transform="translate(99.289754 151.14708)" fill={tables[20].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={19} rx="4.904274" ry="4.495203" transform="translate(183.083906 150.64708)" fill={tables[19].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={18} rx="4.904274" ry="4.495203" transform="translate(265.407199 154.117806)" fill={tables[18].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={17} rx="4.904274" ry="4.495203" transform="translate(265.407199 226.766452)" fill={tables[17].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={16} rx="4.904274" ry="4.495203" transform="translate(667.581053 150.242806)" fill={tables[16].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={15} rx="4.904274" ry="4.495203" transform="translate(744.461342 311.8125)" fill={tables[15].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={14} rx="4.904274" ry="4.495203" transform="translate(741.951748 230.784579)" fill={tables[14].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={13} rx="4.904274" ry="4.495203" transform="translate(668.081053 231.170726)" fill={tables[13].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={12} rx="4.904274" ry="4.495203" transform="translate(784.676779 440.525786)" fill={tables[12].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={11} rx="4.904274" ry="4.495203" transform="translate(98.525074 447.170994)" fill={tables[11].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={10} rx="4.904274" ry="4.495203" transform="translate(184.021759 295.913023)" fill={tables[10].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            {/* <ellipse data-table={31} rx="4.904274" ry="4.495203" transform="translate(182.965221 262.784579)" fill={tables[31].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={30} rx="4.904274" ry="4.495203" transform="translate(99.289754 330.6875)" fill={tables[30].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={29} rx="4.904274" ry="4.495203" transform="translate(813.681577 348.317297)" fill={tables[29].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={28} rx="4.904274" ry="4.495203" transform="translate(814.081053 267.675523)" fill={tables[28].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={27} rx="4.904274" ry="4.495203" transform="translate(815.576256 109.348126)" fill={tables[27].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={26} rx="4.904274" ry="4.495203" transform="translate(740.966139 184.7524)" fill={tables[26].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={25} rx="4.904274" ry="4.495203" transform="translate(740.304281 111.7524)" fill={tables[25].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={24} rx="4.904274" ry="4.495203" transform="translate(815.171982 189.838532)" fill={tables[24].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={23} rx="4.904274" ry="4.495203" transform="translate(100.28016 408.563492)" fill={tables[23].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={22} rx="4.904274" ry="4.495203" transform="translate(154.622282 120.848126)" fill={tables[22].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={21} rx="4.904274" ry="4.495203" transform="translate(99.025074 258.289376)" fill={tables[21].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={20} rx="4.904274" ry="4.495203" transform="translate(99.289754 188.14708)" fill={tables[20].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={19} rx="4.904274" ry="4.495203" transform="translate(183.083906 187.64708)" fill={tables[19].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={18} rx="4.904274" ry="4.495203" transform="translate(265.407199 191.117806)" fill={tables[18].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={17} rx="4.904274" ry="4.495203" transform="translate(265.407199 263.766452)" fill={tables[17].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={16} rx="4.904274" ry="4.495203" transform="translate(667.581053 187.242806)" fill={tables[16].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={15} rx="4.904274" ry="4.495203" transform="translate(744.461342 348.8125)" fill={tables[15].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={14} rx="4.904274" ry="4.495203" transform="translate(741.951748 267.784579)" fill={tables[14].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={13} rx="4.904274" ry="4.495203" transform="translate(668.081053 268.170726)" fill={tables[13].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={12} rx="4.904274" ry="4.495203" transform="translate(784.676779 477.525786)" fill={tables[12].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={11} rx="4.904274" ry="4.495203" transform="translate(98.525074 484.170994)" fill={tables[11].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/>
            <ellipse data-table={10} rx="4.904274" ry="4.495203" transform="translate(184.021759 332.913023)" fill={tables[10].map[5]? "#003B5D" :"#d2dbed"} strokeWidth="0"/> */}
            <ellipse data-table={31} rx="4.904274" ry="4.495203" transform="translate(182.965221 264.784579)" fill={tables[31].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={30} rx="4.904274" ry="4.495203" transform="translate(99.289754 332.6875)" fill={tables[30].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={29} rx="4.904274" ry="4.495203" transform="translate(813.681577 350.317297)" fill={tables[29].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={28} rx="4.904274" ry="4.495203" transform="translate(814.081053 269.675523)" fill={tables[28].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={27} rx="4.904274" ry="4.495203" transform="translate(815.576256 111.348126)" fill={tables[27].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={26} rx="4.904274" ry="4.495203" transform="translate(740.966139 186.7524)" fill={tables[26].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={25} rx="4.904274" ry="4.495203" transform="translate(740.304281 113.7524)" fill={tables[25].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={24} rx="4.904274" ry="4.495203" transform="translate(815.171982 191.838532)" fill={tables[24].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={23} rx="4.904274" ry="4.495203" transform="translate(100.28016 410.563492)" fill={tables[23].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={22} rx="4.904274" ry="4.495203" transform="translate(154.622282 122.848126)" fill={tables[22].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={21} rx="4.904274" ry="4.495203" transform="translate(97.098301 259.789376)" fill={tables[21].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={20} rx="4.904274" ry="4.495203" transform="translate(99.289754 190.14708)" fill={tables[20].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={19} rx="4.904274" ry="4.495203" transform="translate(183.083906 189.64708)" fill={tables[19].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={18} rx="4.904274" ry="4.495203" transform="translate(265.407199 193.117806)" fill={tables[18].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={17} rx="4.904274" ry="4.495203" transform="translate(265.407199 265.766452)" fill={tables[17].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={16} rx="4.904274" ry="4.495203" transform="translate(667.581053 189.242806)" fill={tables[16].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={15} rx="4.904274" ry="4.495203" transform="translate(744.461342 350.8125)" fill={tables[15].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={14} rx="4.904274" ry="4.495203" transform="translate(741.951748 269.784579)" fill={tables[14].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={13} rx="4.904274" ry="4.495203" transform="translate(668.081053 270.170726)" fill={tables[13].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={12} rx="4.904274" ry="4.495203" transform="translate(784.676779 479.525786)" fill={tables[12].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={11} rx="4.904274" ry="4.495203" transform="translate(98.525074 486.170994)" fill={tables[11].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={10} rx="4.904274" ry="4.495203" transform="translate(184.021759 334.913023)" fill={tables[10].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={31} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 191.965221 234.784579)" fill={tables[31].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={30} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 108.289754 302.6875)" fill={tables[30].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={29} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 822.681577 320.317297)" fill={tables[29].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={28} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 823.081053 239.675523)" fill={tables[28].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={27} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 824.576256 81.348126)" fill={tables[27].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={26} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 749.966139 156.7524)" fill={tables[26].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={25} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 749.304281 83.7524)" fill={tables[25].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={24} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 824.171982 161.838532)" fill={tables[24].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={23} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 109.28016 380.563492)" fill={tables[23].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={22} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 163.622282 92.848126)" fill={tables[22].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={21} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 108.025074 230.289376)" fill={tables[21].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={20} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 108.289754 160.14708)" fill={tables[20].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={19} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 192.083906 159.64708)" fill={tables[19].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={18} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 274.407199 163.117806)" fill={tables[18].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={17} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 274.407199 235.766452)" fill={tables[17].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={16} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 676.581053 159.242806)" fill={tables[16].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={15} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 753.461342 320.8125)" fill={tables[15].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={14} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 750.951748 239.784579)" fill={tables[14].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={13} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 677.081053 240.170726)" fill={tables[13].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={12} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 793.676779 449.525786)" fill={tables[12].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={11} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 107.525074 456.170994)" fill={tables[11].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={10} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 193.021759 304.913023)" fill={tables[10].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={31} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 150.965221 234.784579)" fill={tables[31].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={30} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 67.289754 302.6875)" fill={tables[30].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={29} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 781.681577 320.317297)" fill={tables[29].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={28} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 782.081053 239.675523)" fill={tables[28].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={27} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 783.576256 81.348126)" fill={tables[27].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={26} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 708.966139 156.7524)" fill={tables[26].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={25} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 708.304281 83.7524)" fill={tables[25].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={24} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 783.171982 161.838532)" fill={tables[24].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={23} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 68.28016 380.563492)" fill={tables[23].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={22} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 122.622282 92.848126)" fill={tables[22].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={21} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 67.025074 230.289376)" fill={tables[21].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={20} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 67.289754 160.14708)" fill={tables[20].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={19} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 151.083906 159.64708)" fill={tables[19].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={18} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 233.407199 163.117806)" fill={tables[18].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={17} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 233.407199 235.766452)" fill={tables[17].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={16} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 635.581053 159.242806)" fill={tables[16].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={15} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 712.461342 320.8125)" fill={tables[15].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={14} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 709.951748 239.784579)" fill={tables[14].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={13} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 636.081053 240.170726)" fill={tables[13].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={12} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 752.676779 449.525786)" fill={tables[12].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={11} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 66.525074 456.170994)" fill={tables[11].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={10} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 152.021759 304.913023)" fill={tables[10].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={31} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 191.965221 245.784579)" fill={tables[31].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={30} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 108.289754 313.6875)" fill={tables[30].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={29} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 822.681577 331.317297)" fill={tables[29].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={28} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 823.081053 250.675523)" fill={tables[28].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={27} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 824.576256 92.348126)" fill={tables[27].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={26} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 749.966139 167.7524)" fill={tables[26].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={25} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 749.304281 94.7524)" fill={tables[25].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={24} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 824.171982 172.838532)" fill={tables[24].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={23} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 109.28016 391.563492)" fill={tables[23].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={22} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 163.622282 103.848126)" fill={tables[22].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={21} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 108.025074 241.289376)" fill={tables[21].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={20} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 108.289754 171.14708)" fill={tables[20].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={19} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 192.083906 170.64708)" fill={tables[19].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={18} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 274.407199 174.117806)" fill={tables[18].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={17} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 274.407199 246.766452)" fill={tables[17].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={16} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 676.581053 170.242806)" fill={tables[16].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={15} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 753.461342 331.8125)" fill={tables[15].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={14} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 750.951748 250.784579)" fill={tables[14].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={13} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 677.081053 251.170726)" fill={tables[13].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={12} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 793.676779 460.525786)" fill={tables[12].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={11} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 107.525074 467.170994)" fill={tables[11].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={10} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 193.021759 315.913023)" fill={tables[10].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={31} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 150.965221 245.784579)" fill={tables[31].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={30} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 67.289754 313.6875)" fill={tables[30].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={29} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 781.681577 331.317297)" fill={tables[29].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={28} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 782.081053 250.675523)" fill={tables[28].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={27} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 783.576256 92.348126)" fill={tables[27].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={26} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 708.966139 167.7524)" fill={tables[26].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={25} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 708.304281 94.7524)" fill={tables[25].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={24} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 783.171982 172.838532)" fill={tables[24].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={23} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 68.28016 391.563492)" fill={tables[23].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={22} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 122.622282 103.848126)" fill={tables[22].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={21} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 67.025074 241.289376)" fill={tables[21].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={20} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 67.289754 171.14708)" fill={tables[20].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={19} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 151.083906 170.64708)" fill={tables[19].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={18} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 233.407199 174.117806)" fill={tables[18].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={17} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 233.407199 246.766452)" fill={tables[17].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={16} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 635.581053 170.242806)" fill={tables[16].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={15} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 712.461342 331.8125)" fill={tables[15].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={14} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 709.951748 250.784579)" fill={tables[14].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={13} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 636.081053 251.170726)" fill={tables[13].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={12} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 752.676779 460.525786)" fill={tables[12].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={11} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 66.525074 467.170994)" fill={tables[11].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={10} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 152.021759 315.913023)" fill={tables[10].map[10]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={31} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 191.798566 256.784579)" fill={tables[31].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={30} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 108.123099 324.6875)" fill={tables[30].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={29} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 822.514922 342.317297)" fill={tables[29].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={28} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 822.914398 261.675523)" fill={tables[28].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={27} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 824.409601 103.348126)" fill={tables[27].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={26} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 749.799484 178.7524)" fill={tables[26].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={25} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 749.137626 105.7524)" fill={tables[25].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={24} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 824.005327 183.838532)" fill={tables[24].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={23} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 109.113505 402.563492)" fill={tables[23].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={22} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 163.455627 114.848126)" fill={tables[22].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={21} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 107.858419 252.289376)" fill={tables[21].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={20} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 108.123099 182.14708)" fill={tables[20].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={19} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 191.917251 181.64708)" fill={tables[19].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={18} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 274.240544 185.117806)" fill={tables[18].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={17} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 274.240544 257.766452)" fill={tables[17].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={16} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 676.414398 181.242806)" fill={tables[16].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={15} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 753.294687 342.8125)" fill={tables[15].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={14} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 750.785093 261.784579)" fill={tables[14].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={13} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 676.914398 262.170726)" fill={tables[13].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={12} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 793.510124 471.525786)" fill={tables[12].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={11} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 107.358419 478.170994)" fill={tables[11].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={10} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 192.855104 326.913023)" fill={tables[10].map[11]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={9} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 666.152794 386.031745)" fill={tables[9].map[0]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={8} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 160.955627 469.247286)" fill={tables[8].map[0]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={7} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 167.112688 379.914649)" fill={tables[7].map[0]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={6} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 663.652794 466.126309)" fill={tables[6].map[0]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={9} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 680.133606 386.440816)" fill={tables[9].map[1]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={8} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 174.936438 469.656357)" fill={tables[8].map[1]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={7} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 181.0935 380.32372)" fill={tables[7].map[1]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={6} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 677.633606 466.53538)" fill={tables[6].map[1]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={9} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 691.124012 392.936019)" fill={tables[9].map[2]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={8} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 185.926845 476.15156)" fill={tables[8].map[2]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={7} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 192.083906 386.818923)" fill={tables[7].map[2]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={6} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 688.624012 473.030583)" fill={tables[6].map[2]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={9} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 696.1432 405.156745)" fill={tables[9].map[3]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={8} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 190.946033 488.372286)" fill={tables[8].map[3]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={7} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 197.103094 399.039649)" fill={tables[7].map[3]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={6} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 693.6432 485.251309)" fill={tables[6].map[3]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={9} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 691.647997 417.965293)" fill={tables[9].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={8} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 186.450831 501.180834)" fill={tables[8].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={7} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 192.607891 411.848197)" fill={tables[7].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={6} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 689.147997 498.059857)" fill={tables[6].map[4]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={9} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 680.638403 424.869567)" fill={tables[9].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={8} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 175.441236 508.085108)" fill={tables[8].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={7} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 181.598297 418.752471)" fill={tables[7].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={6} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 678.138403 504.964131)" fill={tables[6].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={9} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 667.638403 424.869567)" fill={tables[9].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={8} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 162.441237 508.085108)" fill={tables[8].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={7} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 168.598297 418.752471)" fill={tables[7].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={6} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 665.138403 504.964131)" fill={tables[6].map[6]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={9} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 656.162388 418.752471)" fill={tables[9].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={8} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 150.965221 501.968012)" fill={tables[8].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={7} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 157.122282 412.635375)" fill={tables[7].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={6} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 653.662388 498.847035)" fill={tables[6].map[7]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={9} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 650.152794 406.156745)" fill={tables[9].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={8} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 144.955627 489.372286)" fill={tables[8].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={7} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 151.112688 400.039649)" fill={tables[7].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={6} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 647.652794 486.251309)" fill={tables[6].map[8]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={9} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 654.647997 392.936019)" fill={tables[9].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={8} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 149.45083 476.15156)" fill={tables[8].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={7} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 155.607891 386.818923)" fill={tables[7].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={6} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 652.147997 473.030583)" fill={tables[6].map[9]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={31} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 150.965221 256.784579)" fill={tables[31].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={30} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 67.289754 324.6875)" fill={tables[30].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={29} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 781.681577 342.317297)" fill={tables[29].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={28} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 782.081053 261.675523)" fill={tables[28].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={27} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 783.576256 103.348126)" fill={tables[27].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={26} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 708.966139 178.7524)" fill={tables[26].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={25} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 708.304281 105.7524)" fill={tables[25].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={24} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 783.171982 183.838532)" fill={tables[24].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={23} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 68.28016 402.563492)" fill={tables[23].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={22} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 122.622282 114.848126)" fill={tables[22].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={21} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 67.025074 252.289376)" fill={tables[21].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={20} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 67.289754 182.14708)" fill={tables[20].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={19} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 151.083906 181.64708)" fill={tables[19].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={18} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 233.407199 185.117806)" fill={tables[18].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={17} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 233.407199 257.766452)" fill={tables[17].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={16} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 635.581053 181.242806)" fill={tables[16].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={15} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 712.461342 342.8125)" fill={tables[15].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={14} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 709.951748 261.784579)" fill={tables[14].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={13} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 636.081053 262.170726)" fill={tables[13].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={12} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 752.676779 471.525786)" fill={tables[12].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={11} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 66.525074 478.170994)" fill={tables[11].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-table={10} rx="4.904274" ry="4.495203" transform="matrix(0-1 1 0 152.021759 326.913023)" fill={tables[10].map[5]? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="31" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(152.602517 226.729275)" fill={isFull(31)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="30" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(68.92705 295.557703)" fill={isFull(30)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="29" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(783.318873 313.1875)" fill={isFull(29)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="28" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(783.718349 232.545726)" fill={isFull(28)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="27" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(785.213552 74.218329)" fill={isFull(27)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="26" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(710.603435 149.622603)" fill={isFull(26)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="25" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(709.941577 76.622603)" fill={isFull(25)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="24" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(784.809278 154.708735)" fill={isFull(24)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="23" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(69.917456 373.433695)" fill={isFull(23)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="22" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(124.259578 85.718329)" fill={isFull(22)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="21" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(68.66237 223.159579)" fill={isFull(21)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="20" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(68.92705 153.017283)" fill={isFull(20)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="19" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(152.721202 152.517283)" fill={isFull(19)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="18" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(235.044495 155.988009)" fill={isFull(18)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="17" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(235.044495 228.636655)" fill={isFull(17)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="16" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(637.218349 152.113009)" fill={isFull(16)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="15" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(714.098638 313.682703)" fill={isFull(15)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="14" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(711.589044 232.654782)" fill={isFull(14)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="13" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(637.718349 233.040929)" fill={isFull(13)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="12" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(754.314075 442.395989)" fill={isFull(12)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="11" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(68.16237 449.041197)" fill={isFull(11)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="10" width="37.196049" height="35.25" rx="0" ry="0" transform="translate(153.659055 297.783226)" fill={isFull(10)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-id="9" rx="22" ry="19.5" transform="translate(673.1432 405.156745)" fill={isFull(9)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-id="8" rx="22" ry="19.5" transform="translate(167.946033 488.372286)" fill={isFull(8)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-id="7" rx="22" ry="19.5" transform="translate(174.103094 399.039649)" fill={isFull(7)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <ellipse data-id="6" rx="22" ry="19.5" transform="translate(670.6432 485.251309)" fill={isFull(6)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="5" width="75.196048" height="35.25" rx="0" ry="0" transform="matrix(-1 0 0-1 310.326894 409.376309)" fill={isFull(5)? "#003B5D" :"#d2dbed"} stroke="#020202"/>
            <rect data-id="4" width="75.196048" height="35.25" rx="0" ry="0" transform="translate(734.7173 380.295465)" fill={isFull(4)? "#003B5D" :"#d2dbed"} stroke="#020202"/>
            <rect data-id="3" width="75.196048" height="35.25" rx="0" ry="0" transform="translate(735.7373 508.295466)" fill={isFull(3)? "#003B5D" :"#d2dbed"} stroke="#020202"/>
            <rect data-id="2" width="50.520218" height="35.25" rx="0" ry="0" transform="translate(241.797576 300.413023)" fill={isFull(2)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect data-id="1" width="50.520218" height="35.25" rx="0" ry="0" transform="translate(630.398203 316.88484)" fill={isFull(1)? "#003B5D" :"#d2dbed"} stroke="#000"/>
            <rect width="11" height="540" rx="0" ry="0" transform="translate(860.5 52.610363)" fill="#d2dbed" strokeWidth="0"/>
            <rect width="11" height="540" rx="0" ry="0" transform="translate(32.426575 49.801815)" fill="#d2dbed" strokeWidth="0"/>
            <rect width="181" height="70.547603" rx="0" ry="0" transform="translate(364.233333 62.478599)" fill="#736868" stroke="#000"/>
            {/* <text dx="0" dy="0" font-family="&quot;e1HCkc54Xxi1:::Roboto&quot;" font-size="38.5" font-weight="400" transform="translate(506.000002 111.175214)" fill="url(#e1HCkc54Xxi444-fill)" stroke-width="0"><tspan y="0" font-weight="400" stroke-width="0">
            <![CDATA[ ]]>
            </tspan>
            </text>
            <text dx="0" dy="0" font-family="&quot;e1HCkc54Xxi1:::Roboto&quot;" font-size="38.5" font-weight="400" transform="translate(486.8 102.641882)" stroke-width="0">
            <tspan y="0" font-weight="400" stroke-width="0">
            <![CDATA[ ]]>
            </tspan>
            </text>
            <text dx="0" dy="0" font-family="&quot;e1HCkc54Xxi1:::Roboto&quot;" font-size="38.5" font-weight="400" transform="translate(489.1 295.833333)" stroke-width="0">
            <tspan y="0" font-weight="400" stroke-width="0">
            <![CDATA[ ]]>
            </tspan>
            </text>
            <text dx="0" dy="0" font-family="&quot;e1HCkc54Xxi1:::Roboto&quot;" font-size="38.5" font-weight="400" transform="translate(470.8 90.908548)" stroke-width="0">
            <tspan y="0" font-weight="400" stroke-width="0">
            <![CDATA[ ]]>
            </tspan>
            </text>
            <text dx="0" dy="0" font-family="&quot;e1HCkc54Xxi1:::Roboto&quot;" font-size="30" font-weight="700" transform="translate(432.151203 111.204434)" fill="#fff" stroke-width="0">
            <tspan y="0" font-weight="700" stroke-width="0"><![CDATA[במה ]]>
            </tspan>
            </text> */}
            <rect width="194.133333" height="47.138721" rx="0" ry="0" transform="matrix(.997897 0 0 0.954131 352.508262 529.198578)" fill="#736868" stroke="#000"/>
            {/* <text dx="0" dy="0" font-family="&quot;e1HCkc54Xxi1:::Roboto&quot;" font-size="30" font-weight="700" transform="translate(385.475459 562.043144)" fill="#fff" stroke-width="0">
            <tspan y="0" font-weight="700" stroke-width="0">
            <![CDATA[בר משקאות ]]>
            </tspan>
            </text> */}
            <rect width="134.634372" height="12.328936" rx="0" ry="0" transform="translate(43.426575 577.637816)" fill="#d2dbed" strokeWidth="0"/>
            <rect width="134.634372" height="12.328936" rx="0" ry="0" transform="translate(724.426575 577.637816)" fill="#d2dbed" strokeWidth="0"/>
            <rect width="264.975827" height="14.972548" rx="0" ry="0" transform="translate(319.926576 577.637816)" fill="#d2dbed" strokeWidth="0"/>
            {/* <style>
            </style> */}
            </svg>
        </div>
    )
};

export default MapTables;
