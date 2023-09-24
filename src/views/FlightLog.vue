<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from "@coreui/vue";
import { right } from "@popperjs/core";
</script>

<template>
  <div style="padding: 2rem 4rem 1rem 4rem">
    <h2 class="text">
      Flight Log
      <img
        style="display: inline; width: 35px"
        src="../assets/emoji/plane.svg"
        alt="plane"
      />
    </h2>
    <br />
    <h6 class="text">
      Note: hover on reg, airline and airport code to see details!
    </h6>
    <div class="ft-container">
      <CTable class="flight-table" hover striped borderless>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell
              scope="col"
              v-for="(header, key) in content.meta.fields"
              v-bind:key="'header-' + key"
            >
              {{ header.replace(/\s/g, "") }}
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow
            v-for="(_, rowKey) in content.data"
            v-bind:key="'row-' + rowKey"
          >
            <CTableHeaderCell>
              {{ rowKey + 1 }}
            </CTableHeaderCell>
            <CTableDataCell
              v-for="(column, columnKey) in content.meta.fields"
              v-bind:key="'row-' + rowKey + '-column-' + columnKey"
            >
              <div v-if="column == 'Airline'">
                <div
                  v-tooltip="{
                    content: airlines[content.data[rowKey][column]],
                    html: true,
                    placement: right,
                  }"
                >
                  {{ content.data[rowKey][column].replace(/\s/g, "") }}
                </div>
              </div>
              <div v-else-if="column == 'From' || column == 'To'">
                <div
                  v-tooltip="{
                    content: airports[content.data[rowKey][column]],
                    html: true,
                    placement: right,
                  }"
                >
                  {{ content.data[rowKey][column].replace(/\s/g, "") }}
                </div>
              </div>
              <div v-else-if="column == 'Reg'">
                <div
                  v-tooltip="{
                    content:
                      '<div><img src=' +
                      content.data[rowKey][column].split('|')[1] +
                      '></div>',
                    html: true,
                    placement: right,
                  }"
                >
                  <a v-bind:href="content.data[rowKey][column].split('|')[2]">
                    <span>{{
                      content.data[rowKey][column].split("|")[0]
                    }}</span>
                  </a>
                </div>
              </div>
              <div v-else>
                {{ content.data[rowKey][column].replace(/\s/g, "") }}
              </div>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </div>
  </div>
</template>

<style scoped>
.ft-container {
  padding: 0.5rem 2rem 0rem 2rem;
  font-family: "Courier New", Courier, monospace;
}
.flight-table {
  padding: 0.5rem 2rem 0rem 2rem;
  opacity: 100%;
}
.text {
  padding: 0em 1rem 0rem 1rem;
  display: inline;
  font-family: Courier, Courier, monospace;
  font-weight: bold;
}
</style>

<script>
import Papa from "papaparse";
export default {
  created: function () {
    this.parseFile();
  },
  methods: {
    parseFile() {
      console.log("PARSING");
      Papa.parse(this.raw, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          this.content = results;
        },
      });
    },
  },
  mounted() {
    document.title = "Flight Log";
  },
  data() {
    let content = {};
    const airlines = {
      AMU: "Air Macau",
      ARG: "Aerolíneas Argentinas",
      CCA: "Air China",
      CDG: "Shandong Airlines",
      CES: "China Eastern Airlines",
      CHH: "Hainan Airlines",
      CPA: "Cathay Pacific",
      CQH: "Spring Airlines",
      CSH: "Shanghai Airlines",
      CSN: "China Southern Airlines",
      CXA: "Xiamen Air",
      DKH: "Juneyao Airlines",
      DSM: "LATAM Argentina",
      GAP: "AirPhil Express",
      HDA: "Dragon Air",
      JBU: "JetBlue",
      MXY: "Breeze Airways",
      PAL: "Philippine Airlines",
      RLH: "Ruili Airlines",
      THY: "Turkish Airlines",
    };
    const airports = {
      AEP: "Buenos Aires Aeroparque Jorge Newbery",
      BKK: "Bangkok Suvarnabhumi",
      BOS: "Boston Logan",
      CAN: "Guangzhou Baiyun",
      DLU: "Dali Huangcaoba",
      DTW: "Detroit Metropolitan",
      DYG: "Zhangjiajie Hehua",
      EZE: "Buenos Aires Ministro Pistarini",
      FTE: "El Calafate",
      GRU: "São Paulo Guarulhos",
      HKG: "Hong Kong Chek Lap Kok",
      IST: "Istanbul",
      IGR: "Cataratas del Iguazú",
      JJN: "Quanzhou Jinjiang",
      KMG: "Kunming Changshui",
      LAX: "Los Angeles",
      MFM: "Macau",
      MNL: "Manila Ninoy Aquino",
      MPH: "Catican/Boracay",
      PVD: "Rhode Island T.F. Green",
      PVG: "Shanghai Pudong",
      SHA: "Shanghai Hongqiao",
      SZX: "Shenzhen Bao'an",
      TFU: "Chengdu Tianfu",
      USH: "Ushuaia Malvinas Argentinas",
      WUX: "Sunan Shuofang",
      XMN: "Xiamen Gaoqi",
      XIY: "Xi'an Xianyang",
      ZHA: "Zhanjiang",
    };
    const raw = `Date,Flight,Reg,From,To,Dist,Dep,Arr,Airline,Aircraft,Seat
2023/09/08,B62036,N3125J|https://cdn.jetphotos.com/400/6/640394_1693483459.jpg|https://cdn.jetphotos.com/full/6/640394_1693483459.jpg,DTW,BOS,621,09:09,10:33,JBU,A223,18F
2023/09/02,B61037,N318JB|https://cdn.jetphotos.com/400/6/90637_1652053492.jpg|https://cdn.jetphotos.com/full/6/90637_1652053492.jpg,BOS,DTW,621,17:26,19:12,JBU,E190,6D
2023/08/30,MX701,N216BZ|https://cdn.jetphotos.com/400/5/1226511_1688864273.jpg|https://cdn.jetphotos.com/full/5/1226511_1688864273.jpg,LAX,PVD,2587,12:26,20:23,MXY,A223,5A
2023/08/11,PR102,RP-C7777|https://cdn.jetphotos.com/400/5/96935_1652696389.jpg|https://cdn.jetphotos.com/full/5/96935_1652696389.jpg,MNL,LAX,7296,22:39,20:11,PAL,B77W,51A
2023/08/11,PR357,RP-C9907|https://cdn.jetphotos.com/400/5/99578_1512987831.jpg|https://cdn.jetphotos.com/full/5/99578_1512987831.jpg,JJN,MNL,729,15:22,17:50,PAL,A321,43K
2023/07/06,HO1060,B-8587|https://cdn.jetphotos.com/400/5/23047_1573133699.jpg|https://cdn.jetphotos.com/full/5/23047_1573133699.jpg,TFU,SHA,1006,20:48,22:56,DKH,A321,34A
2023/06/30,HO1059,B-8068|https://cdn.jetphotos.com/400/6/48107_1625045717.jpg|https://cdn.jetphotos.com/full/6/48107_1625045717.jpg,SHA,TFU,1107,17:24,20:05,DKH,A321,41K
2023/05/15,9C8922,B-6852|https://cdn.jetphotos.com/400/5/83777_1559148550.jpg|https://cdn.jetphotos.com/full/5/83777_1559148550.jpg,HKG,PVG,772,18:05,20:11,CQH,A320,7A
2023/05/12,CX365,B-LAA|https://cdn.jetphotos.com/400/5/1606889_1686112376.jpg|https://cdn.jetphotos.com/full/5/1606889_1686112376.jpg,PVG,HKG,779,10:06,12:16,CPA,A333,54K
2021/05/07,DR5310,B-7866|https://cdn.jetphotos.com/400/6/99111_1621348608.jpg|https://cdn.jetphotos.com/full/6/99111_1621348608.jpg,XIY,WUX,606,11:38,14:05,RLH,B738,7A
2021/05/04,CZ5791,B-6135|https://cdn.jetphotos.com/400/6/76682_1645366796.jpg|https://cdn.jetphotos.com/full/6/76682_1645366796.jpg,PVG,XIY,688,10:22,12:40,CSN,A332,45K
2020/02/02,MU506,B-6926|https://cdn.jetphotos.com/400/5/66757_1582880782.jpg|https://cdn.jetphotos.com/full/5/66757_1582880782.jpg,HKG,PVG,781,20:20,22:54,CES,A321,35A
2020/02/02,TK70,TC-LJE|https://cdn.jetphotos.com/400/5/16090_1580077654.jpg|https://cdn.jetphotos.com/full/5/16090_1580077654.jpg,IST,HKG,4980,02:00,17:00,THY,B77W,16A
2020/02/01,TK16,TC-JJU|https://cdn.jetphotos.com/400/6/11623_1585460432.jpg|https://cdn.jetphotos.com/full/6/11623_1585460432.jpg,GRU,IST,6569,04:05,22:30,THY,B77W,41K
2020/02/02,TK16,TC-JJU|https://cdn.jetphotos.com/400/5/23788_1596117261.jpg|https://cdn.jetphotos.com/full/5/23788_1596117261.jpg,EZE,GRU,1071,23:50,02:25,THY,B77W,44K
2020/01/29,AR1897,LV-GVC|https://cdn.jetphotos.com/400/6/74980_1535416733.jpg|https://cdn.jetphotos.com/full/6/74980_1535416733.jpg,USH,AEP,1481,15:20,18:40,ARG,B738,20F
2020/01/26,LA7741,LV-BHU|https://cdn.jetphotos.com/400/5/18980_1565738801.jpg|https://cdn.jetphotos.com/full/5/18980_1565738801.jpg,FTE,USH,353,12:20,13:14,DSM,A320,12A
2020/01/23,LA7732,LV-BFO|https://cdn.jetphotos.com/400/5/44799_1497677728.jpg|https://cdn.jetphotos.com/full/5/44799_1497677728.jpg,AEP,FTE,1287,08:35,11:35,DSM,A320,3L
2020/01/19,LA7507,LV-FUX|https://cdn.jetphotos.com/400/6/20116_1558931099.jpg|https://cdn.jetphotos.com/full/6/20116_1558931099.jpg,IGR,AEP,654,16:18,17:34,DSM,A320,5L
2020/01/17,LA7508,LV-BRA|https://cdn.jetphotos.com/400/6/66313_1591416668.jpg|https://cdn.jetphotos.com/full/6/66313_1591416668.jpg,AEP,IGR,654,19:10,20:48,DSM,A320,8L
2020/01/02,TK15,TC-JJG|https://cdn.jetphotos.com/400/5/97795_1574616837.jpg|https://cdn.jetphotos.com/full/5/97795_1574616837.jpg,GRU,EZE,1071,19:30,22:25,THY,B77W,35A
2020/01/02,TK16,TC-JJG|https://cdn.jetphotos.com/400/5/11944_1593669951.jpg|https://cdn.jetphotos.com/full/5/11944_1593669951.jpg,IST,GRU,6569,10:10,18:05,THY,B77W,35A
2020/01/01,TK27,TC-JJM|https://cdn.jetphotos.com/400/6/60357_1555094481.jpg|https://cdn.jetphotos.com/full/6/60357_1555094481.jpg,PVG,IST,4988,23:05,06:15,THY,B77W,33K
2019/08/29,9C8838,B-8370|https://cdn.jetphotos.com/400/5/43386_1572049955.jpg|https://cdn.jetphotos.com/full/5/43386_1572049955.jpg,XMN,SHA,500,14:55,16:45,CQH,A320,6E
2019/07/10,9C8856,B-6751|https://cdn.jetphotos.com/400/6/19520_1562586205.jpg|https://cdn.jetphotos.com/full/6/19520_1562586205.jpg,CAN,SHA,731,16:10,18:30,CQH,A320,NA
2019/07/06,HU7208,B-1133|https://cdn.jetphotos.com/400/5/13829_1581584836.jpg|https://cdn.jetphotos.com/full/5/13829_1581584836.jpg,PVG,SZX,767,11:55,14:30,CHH,B789,42A
2019/06/15,CZ3908,B-6059|https://cdn.jetphotos.com/400/6/38670_1548129801.jpg|https://cdn.jetphotos.com/full/6/38670_1548129801.jpg,SHA,PEK,669,11:45,14:10,CSN,A332,40K
2018/08/05,HU7141,B-1543|https://cdn.jetphotos.com/400/6/31332_1529068246.jpg|https://cdn.jetphotos.com/full/6/31332_1529068246.jpg,CAN,PVG,748,12:35,14:55,CHH,B789,44J
2018/07/31,MU5315,B-1320|https://cdn.jetphotos.com/400/5/59368_1521874266.jpg|https://cdn.jetphotos.com/full/5/59368_1521874266.jpg,SHA,CAN,731,19:30,21:50,CES,B738,36K
2017/07/15,HU7207,B-1501|https://cdn.jetphotos.com/400/5/17741_1595344859.jpg|https://cdn.jetphotos.com/full/5/17741_1595344859.jpg,SZX,PVG,767,08:20,10:40,CHH,B738,39A
2017/07/09,CA1893,B-1833|https://cdn.jetphotos.com/400/6/86211_1529521353.jpg|https://cdn.jetphotos.com/full/6/86211_1529521353.jpg,PVG,SZX,767,07:25,10:00,CCA,A321,32A
2016/07/04,FM9452,B-2567|https://cdn.jetphotos.com/400/5/34480_1500116963.jpg|https://cdn.jetphotos.com/full/5/34480_1500116963.jpg,KMG,SHA,1210,13:45,17:10,CSH,B763,35J
2016/07/03,MU5944,B-5809|https://cdn.jetphotos.com/400/4/14636_1394874374.jpg|https://cdn.jetphotos.com/full/4/14636_1394874374.jpg,DLU,KMG,158,17:30,18:25,CES,B737,38A
2016/06/30,MU5941,B-5256|https://cdn.jetphotos.com/400/5/43513_1514700825.jpg|https://cdn.jetphotos.com/full/5/43513_1514700825.jpg,KMG,DLU,158,09:05,09:50,CES,B737,37L
2016/06/29,HO1121,B-6572|https://cdn.jetphotos.com/400/5/58278_1410430837.jpg|https://cdn.jetphotos.com/full/5/58278_1410430837.jpg,SHA,KMG,1210,08:35,11:50,DKH,A320,8A
2015/10/06,MF8372,B-2869|https://cdn.jetphotos.com/400/6/22788_1529043616.jpg|https://cdn.jetphotos.com/full/6/22788_1529043616.jpg,KMG,DLU,752,13:30,16:05,CXA,B752,61A
2015/10/03,FM9387,B-5261|https://cdn.jetphotos.com/400/5/39035_1542637481.jpg|https://cdn.jetphotos.com/full/5/39035_1542637481.jpg,PVG,ZHA,987,16:35,19:25,CSH,B737,35A
2015/08/28,FM9344,B-1720|https://cdn.jetphotos.com/400/6/94581_1479140592.jpg|https://cdn.jetphotos.com/full/6/94581_1479140592.jpg,DYG,PVG,693,20:45,22:40,CSH,B738,34A
2015/08/24,FM9343,B-5131|https://cdn.jetphotos.com/400/5/85827_1476071738.jpg|https://cdn.jetphotos.com/full/5/85827_1476071738.jpg,PVG,DYG,693,20:05,22:55,CSH,B738,34A
2015/08/22,9C8838,B-6301|https://cdn.jetphotos.com/400/5/36428_1578705790.jpg|https://cdn.jetphotos.com/full/5/36428_1578705790.jpg,XMN,SHA,500,15:05,17:00,CQH,A320,N/A
2015/08/17,SC4942,B-5348|https://cdn.jetphotos.com/400/5/89469_1545554789.jpg|https://cdn.jetphotos.com/full/5/89469_1545554789.jpg,PVG,XMN,500,11:25,13:20,CDG,B738,16A
2014/07/02,MF8567,B-5028|https://cdn.jetphotos.com/400/5/36550_1522996209.jpg|https://cdn.jetphotos.com/full/5/36550_1522996209.jpg,XMN,SHA,500,11:00,12:30,CXA,B737,46L
2014/06/27,MF8412,B-5602|https://cdn.jetphotos.com/400/5/64242_1592820324.jpg|https://cdn.jetphotos.com/full/5/64242_1592820324.jpg,SHA,XMN,500,11:20,12:50,CXA,B738,N/A
2013/07/04,FM542,B-2566|https://cdn.jetphotos.com/400/5/67154_1579517515.jpg|https://cdn.jetphotos.com/full/5/67154_1579517515.jpg,BKK,PVG,1802,16:50,22:10,CSH,B763,35J
2013/06/30,MU547,B-6052|https://cdn.jetphotos.com/400/3/86796_1328658765.jpg|https://cdn.jetphotos.com/full/3/86796_1328658765.jpg,PVG,BKK,1802,21:40,00:55,CES,A346,N/A
2011/07/12,MU2008,N/A|https://cdn.jetphotos.com/400/2/94371_1210260562.jpg|https://cdn.jetphotos.com/full/2/94371_1210260562.jpg,MFM,PVG,803,16:00,18:10,CES,A320,N/A
2011/07/07,MU2007,N/A|https://cdn.jetphotos.com/400/3/95532_1315723769.jpg|https://cdn.jetphotos.com/full/3/95532_1315723769.jpg,PVG,MFM,803,12:25,15:00,CES,A320,N/A
2011/01/29,PR336,N/A|https://cdn.jetphotos.com/400/4/69641_1355460611.jpg|https://cdn.jetphotos.com/full/4/69641_1355460611.jpg,MNL,PVG,1152,12:05,15:50,PAL,A333,N/A
2011/01/20,PR337,N/A|https://cdn.jetphotos.com/400/2/58434_1264343842.jpg|https://cdn.jetphotos.com/full/2/58434_1264343842.jpg,PVG,MNL,1152,16:55,20:50,PAL,A320,N/A
2010/10/06,KA892,N/A|https://cdn.jetphotos.com/400/4/42302_1339158842.jpg|https://cdn.jetphotos.com/full/4/42302_1339158842.jpg,HKG,PVG,781,16:00,18:40,HDA,A321,N/A
2010/10/06,CX906,N/A|https://cdn.jetphotos.com/400/6/51688_1444341754.jpg|https://cdn.jetphotos.com/full/6/51688_1444341754.jpg,MNL,HKG,??,10:50,13:30,CPA,A343,N/A
2010/10/05,2P74,N/A|https://cdn.jetphotos.com/400/5/53328_1457690683.jpg|https://cdn.jetphotos.com/full/5/53328_1457690683.jpg,MPH,MNL,??,??,??,GAP,Dash8-300,N/A
2010/10/03,2P??,RP-C3016|https://cdn.jetphotos.com/400/3/92542_1334287404.jpg|https://cdn.jetphotos.com/full/3/92542_1334287404.jpg,MNL,MPH,??,??,??,GAP,Dash8-300,N/A
2010/10/02,CX918,N/A|https://cdn.jetphotos.com/400/6/79922_1417706255.jpg|https://cdn.jetphotos.com/full/6/79922_1417706255.jpg,HKG,MNL,712,14:20,16:35,CPA,B744,N/A
2010/10/02,KA831,B-HYF|https://cdn.jetphotos.com/400/1/27982_1299503451.jpg|https://cdn.jetphotos.com/full/1/27982_1299503451.jpg,PVG,HKG,781,08:40,11:35,HDA,A333,N/A
2010/08/31,PR336,N/A|https://cdn.jetphotos.com/400/4/79172_1321131511.jpg|https://cdn.jetphotos.com/full/4/79172_1321131511.jpg,MNL,PVG,1152,12:05,15:50,PAL,A333,N/A
2010/08/26,PR337,N/A|https://cdn.jetphotos.com/400/6/17299_1586238940.jpg|https://cdn.jetphotos.com/full/6/17299_1586238940.jpg,PVG,MNL,1152,16:55,20:50,PAL,A333,N/A
2010/06/29,NX110,N/A|https://cdn.jetphotos.com/400/2/49528_1214997745.jpg|https://cdn.jetphotos.com/full/2/49528_1214997745.jpg,MFM,PVG,803,??,??,AMU,A319,N/A
2010/06/25,NX107,N/A|https://cdn.jetphotos.com/400/1/56248_1117980108.jpg|https://cdn.jetphotos.com/full/1/56248_1117980108.jpg,PVG,MFM,803,??,??,AMU,A319,N/A`;
    return {
      raw: raw,
      content: content,
      airlines: airlines,
      airports: airports,
    };
  },
};
</script>
