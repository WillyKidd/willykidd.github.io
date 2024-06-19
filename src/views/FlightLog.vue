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
    <h6 class="text">Hover on aircraft registration to see its photo!</h6>
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
              class="data-cell"
            >
              <div v-if="column == 'Airline'">
                <div
                  style="text-decoration: underline"
                >
                  <img :src="require(`@/assets/airlines/${content.data[rowKey][column]}.jpg`)" height="30">
                </div>
              </div>
              <div v-else-if="column == 'From' || column == 'To'">
                <div
                  v-tooltip="{
                    content: String(airports[content.data[rowKey][column]]).split('|')[0],
                    html: true,
                    placement: right,
                  }"
                  style="text-decoration: underline"
                >
                  <div>
                    <img :src="require(`@/assets/flag/${String(airports[content.data[rowKey][column]]).split('|')[1]}.png`)" height="12" class="reg-flag">
                    <a>
                      {{ content.data[rowKey][column] }}
                    </a>
                  </div>
                </div>
              </div>
              <div v-else-if="column == 'Registration'">
                <div
                  v-tooltip="{
                    content:
                      '<div><img src=' +
                      'https://cdn.jetphotos.com/400' + content.data[rowKey][column].split('|')[2] +
                      '></div>',
                    html: true,
                    placement: right,
                  }"
                >
                  <div>
                    <img :src="require(`@/assets/flag/${content.data[rowKey][column].split('|')[0]}.png`)" height="12" class="reg-flag">
                    <a
                      :href="'https://cdn.jetphotos.com/full' + content.data[rowKey][column].split('|')[2]"
                      class="black-link"
                    >
                      {{
                        content.data[rowKey][column].split("|")[1]
                      }}
                    </a>
                  </div>
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
.reg-flag {
  margin-bottom: 0.1rem;
  margin-right: 0.2rem;
}
.link-hover {
  background-color: black;
  color: white;
}
.data-cell {
  font-weight: bold;
  color: black;
}
.black-link {
  color: black;
  background-color: none;
}
.black-link:hover {
  color: white;
  background-color: black;
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
      AAL: "American Airlines",
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
      GJS: "GoJet Airlines",
      HDA: "Dragon Air",
      JBU: "JetBlue",
      MXY: "Breeze Airways",
      PAL: "Philippine Airlines",
      RLH: "Ruili Airlines",
      RPA: "Republic Airways",
      THY: "Turkish Airlines",
      UAL: "United Airlines",
    };
    const airports = {
      AEP: "Buenos Aires Aeroparque Jorge Newbery|LV",
      BKK: "Bangkok Suvarnabhumi|HS",
      BOS: "Boston Logan|N",
      CAN: "Guangzhou Baiyun|B",
      CLT: "Charlotte Douglas|N",
      DLU: "Dali Huangcaoba|B",
      DTW: "Detroit Metropolitan|N",
      DYG: "Zhangjiajie Hehua|B",
      EWR: "Newark Liberty|N",
      EZE: "Buenos Aires Ministro Pistarini|LV",
      FLL: "Fort Lauderdale-Hollywood|N",
      FTE: "El Calafate|LV",
      GRU: "São Paulo Guarulhos|PT",
      HKG: "Hong Kong Chek Lap Kok|HK",
      IST: "Istanbul|TC",
      IGR: "Cataratas del Iguazú|LV",
      JFK: "New York John F. Kennedy|N",
      JJN: "Quanzhou Jinjiang|B",
      KIX: "Osaka Kansai|JA",
      KMG: "Kunming Changshui|B",
      LAX: "Los Angeles|N",
      MFM: "Macau|MO",
      MNL: "Manila Ninoy Aquino|RP",
      MPH: "Catican/Boracay|RP",
      NGO: "Chubu Centrair, Nagoya|JA",
      PEK: "Beijing Capital|B",
      PVD: "Rhode Island T.F. Green|N",
      PVG: "Shanghai Pudong|B",
      SEA: "Seattle Tacoma|N",
      SHA: "Shanghai Hongqiao|B",
      SZX: "Shenzhen Bao'an|B",
      TFU: "Chengdu Tianfu|B",
      USH: "Ushuaia Malvinas Argentinas|LV",
      WUX: "Sunan Shuofang|B",
      XMN: "Xiamen Gaoqi|B",
      XIY: "Xi'an Xianyang|B",
      ZHA: "Zhanjiang|B",
    };
    const raw = `Date,Airline,Flight,From,To,Aircraft,Registration,Miles,Dep,Arr,Seat
2024/06/17,CXA,MF8545,XMN,SHA,B737-84P,B|B-5552|/5/651952_1713103893.jpg,546,20:02,21:26,44A
2024/06/16,CXA,MF840,KIX,XMN,B737-86N,B|B-5595|/5/61396_1549775561.jpg,1246,19:18,21:24,58A
2024/06/10,CCA,CA405,PVG,NGO,A321-232,B|B-8495|/5/37713_1641694507.jpg,906,08:24,11:15,13A
2024/04/27,PAL,PR336,MNL,PVG,A330-343,RP|RP-C8782|/5/431834_1708222822.jpg,1151,11:57,14:53,54A
2024/04/26,PAL,PR127,JFK,MNL,A350-941,RP|RP-C3508|/5/549605_1714637055.jpg,8506,04:17,08:14,54K
2024/03/29,JBU,B61196,FLL,PVD,A320-232,N|N779JB|/5/1453404_1706409636.jpg,1190,21:02,23:50,19A
2024/03/24,JBU,B61197,PVD,FLL,A320-232,N|N644JB|/6/1386229_1707746973.jpg,1190,06:25,09:15,8F
2024/02/10,RPA,UA3420,EWR,BOS,ERJ-175LR,N|N729YX|/5/612886_1707409232.jpg,200,14:50,15:35,18A
2024/02/10,GJS,UA4563,DTW,EWR,CRJ-550,N|N536GJ|/5/1439056_1704163014.jpg,486,12:06,13:12,16A
2024/02/07,JBU,B61037,BOS,DTW,ERJ-190AR,N|N307JB|/6/611400_1686857339.jpg,621,12:38,14:13,5D
2024/01/18,UAL,UA1890,LAX,EWR,B777-222(ER),N|N782UA|/6/61117_1667443336.jpg,2450,09:07,16:30,44A
2023/12/17,UAL,UA2490,EWR,LAX,B757-224,N|N67134|/6/60484_1662421793.jpg,2450,18:33,21:03,32F
2023/12/17,RPA,UA3590,PVD,EWR,ERJ-175LR,N|N766YX|/6/748343_1697722673.jpg,160,13:06,13:56,19D
2023/11/28,AAL,AA1254,CLT,PVD,A321-231,N|N576UW|/5/62545_1605700249.jpg,683,07:31,08:57,14F
2023/11/27,AAL,AA611,SEA,CLT,A321-231,N|N563UW|/5/21866_1566281141.jpg,2275,22:22,05:38,21F
2023/11/22,JBU,B6197,BOS,SEA,A321-231,N|N961JT|/6/466794_1693976928.jpg,2489,20:22,23:19,16F
2023/09/08,JBU,B62036,DTW,BOS,A220-371,N|N3125J|/6/640394_1693483459.jpg,621,09:09,10:33,18F
2023/09/02,JBU,B61037,BOS,DTW,ERJ-190AR,N|N318JB|/6/90637_1652053492.jpg,621,17:26,19:12,6D
2023/08/30,MXY,MX701,LAX,PVD,A220-371,N|N216BZ|/5/1226511_1688864273.jpg,2587,12:26,20:23,5A
2023/08/11,PAL,PR102,MNL,LAX,B777-36N(ER),RP|RP-C7777|/5/96935_1652696389.jpg,7296,22:39,20:11,51A
2023/08/11,PAL,PR357,JJN,MNL,A321-231,RP|RP-C9907|/5/99578_1512987831.jpg,729,15:22,17:50,43K
2023/07/06,DKH,HO1060,TFU,SHA,A321-231,B|B-8587|/5/23047_1573133699.jpg,1006,20:48,22:56,34A
2023/06/30,DKH,HO1059,SHA,TFU,A321-211,B|B-8068|/6/48107_1625045717.jpg,1107,17:24,20:05,41K
2023/05/15,CQH,9C8922,HKG,PVG,A320-214,B|B-6852|/5/83777_1559148550.jpg,772,18:05,20:11,7A
2023/05/12,CPA,CX365,PVG,HKG,A330-342,HK|B-LAA|/5/1606889_1686112376.jpg,779,10:06,12:16,54K
2021/05/07,RLH,DR5310,XIY,WUX,B737-86J,B|B-7866|/6/99111_1621348608.jpg,606,11:38,14:05,7A
2021/05/04,CSN,CZ5791,PVG,XIY,A330-223,B|B-6135|/6/76682_1645366796.jpg,688,10:22,12:40,45K
2020/02/02,CES,MU506,HKG,PVG,A321-231,B|B-6926|/5/66757_1582880782.jpg,781,20:36,22:33,35A
2020/02/02,THY,TK70,IST,HKG,B777-3F2(ER),TC|TC-LJE|/5/16090_1580077654.jpg,4980,02:00,17:00,16A
2020/02/01,THY,TK16,GRU,IST,B777-3F2(ER),TC|TC-JJU|/6/11623_1585460432.jpg,6569,04:05,22:30,41K
2020/02/02,THY,TK16,EZE,GRU,B777-3F2(ER),TC|TC-JJU|/5/23788_1596117261.jpg,1071,23:50,02:25,44K
2020/01/29,ARG,AR1897,USH,AEP,B737-887,LV|LV-GVC|/6/74980_1535416733.jpg,1481,15:56,18:52,20F
2020/01/26,DSM,LA7741,FTE,USH,A320-233,LV|LV-BHU|/5/18980_1565738801.jpg,353,12:20,13:23,12A
2020/01/23,DSM,LA7732,AEP,FTE,A320-233,LV|LV-BFO|/5/44799_1497677728.jpg,1287,08:20,11:25,3L
2020/01/19,DSM,LA7507,IGR,AEP,A320-233,LV|LV-FUX|/6/20116_1558931099.jpg,654,16:08,17:34,5L
2020/01/17,DSM,LA7508,AEP,IGR,A320-233,LV|LV-BRA|/6/66313_1591416668.jpg,654,19:10,20:48,8L
2020/01/02,THY,TK15,GRU,EZE,B777-3F2(ER),TC|TC-JJG|/5/97795_1574616837.jpg,1071,19:30,22:25,35A
2020/01/02,THY,TK16,IST,GRU,B777-3F2(ER),TC|TC-JJG|/5/11944_1593669951.jpg,6569,10:10,18:05,35A
2020/01/01,THY,TK27,PVG,IST,B777-3F2(ER),TC|TC-JJM|/6/60357_1555094481.jpg,4988,23:05,06:15,33K
2019/08/29,CQH,9C8838,XMN,SHA,A320-214,B|B-8370|/5/43386_1572049955.jpg,500,14:55,16:45,6E
2019/07/10,CQH,9C8856,CAN,SHA,A320-214,B|B-6751|/6/19520_1562586205.jpg,731,16:10,18:30,NA
2019/07/06,CHH,HU7208,PVG,SZX,B787-9,B|B-1133|/5/13829_1581584836.jpg,767,11:55,14:30,42A
2019/06/15,CSN,CZ3908,SHA,PEK,A330-243,B|B-6059|/6/38670_1548129801.jpg,669,11:45,14:10,40K
2018/08/05,CHH,HU7141,CAN,PVG,B787-9,B|B-1543|/6/31332_1529068246.jpg,748,12:35,14:55,44J
2018/07/31,CES,MU5315,SHA,CAN,B737-89P,B|B-1320|/5/59368_1521874266.jpg,731,20:01,21:45,36K
2017/07/15,CHH,HU7207,SZX,PVG,B737-84P,B|B-1501|/5/17741_1595344859.jpg,767,08:27,10:28,39A
2017/07/09,CCA,CA1893,PVG,SZX,A321-232,B|B-1833|/6/86211_1529521353.jpg,767,07:43,09:44,32A
2016/07/04,CSH,FM9452,KMG,SHA,B767-36D,B|B-2567|/5/34480_1500116963.jpg,1210,13:45,17:10,35J
2016/07/03,CES,MU5944,DLU,KMG,B737-79P,B|B-5809|/4/14636_1394874374.jpg,158,17:30,18:15,38A
2016/06/30,CES,MU5941,KMG,DLU,B737-79P,B|B-5256|/5/43513_1514700825.jpg,158,09:23,09:59,37L
2016/06/29,DKH,HO1121,SHA,KMG,A320-214,B|B-6572|/5/58278_1410430837.jpg,1210,09:16,12:11,8A
2015/10/06,CXA,MF8372,SZX,SHA,B757-25C,B|B-2869|/6/22788_1529043616.jpg,752,16:23,18:19,61A
2015/10/03,CSH,FM9387,PVG,ZHA,B737-76D,B|B-5261|/5/39035_1542637481.jpg,987,16:47,19:03,35A
2015/08/28,CSH,FM9344,DYG,PVG,B737-86D,B|B-1720|/6/94581_1479140592.jpg,693,20:42,22:21,34A
2015/08/24,CSH,FM9343,PVG,DYG,B737-8Q8,B|B-5131|/5/85827_1476071738.jpg,693,22:16,00:06,34A
2015/08/22,CQH,9C8838,XMN,SHA,A320-214,B|B-6301|/5/36428_1578705790.jpg,500,15:05,17:00,N/A
2015/08/17,CDG,SC4942,PVG,XMN,B737-85N,B|B-5348|/5/89469_1545554789.jpg,500,11:25,13:20,16A
2014/07/02,CXA,MF8567,XMN,SHA,B737-75C,B|B-5028|/5/36550_1522996209.jpg,500,11:00,12:30,46L
2014/06/27,CXA,MF8412,SHA,XMN,B737-86N,B|B-5602|/5/64242_1592820324.jpg,500,11:20,12:50,N/A
2013/07/04,CSH,FM542,BKK,PVG,B767-36D(ER),B|B-2566|/5/67154_1579517515.jpg,1802,16:50,22:10,35J
2013/06/30,CES,MU547,PVG,BKK,A340-642,B|B-6052|/3/86796_1328658765.jpg,1802,21:40,00:55,N/A
2011/07/12,CES,MU2008,MFM,PVG,A320,B|N/A|/2/94371_1210260562.jpg,803,16:00,18:10,N/A
2011/07/07,CES,MU2007,PVG,MFM,A320,B|N/A|/3/95532_1315723769.jpg,803,12:25,15:00,N/A
2011/01/29,PAL,PR336,MNL,PVG,A330-301,RP|N/A|/4/69641_1355460611.jpg,1152,12:05,15:50,N/A
2011/01/20,PAL,PR337,PVG,MNL,A320-214,RP|N/A|/2/58434_1264343842.jpg,1152,16:55,20:50,N/A
2010/10/06,HDA,KA892,HKG,PVG,A321-231,HK|N/A|/4/42302_1339158842.jpg,781,16:00,18:40,N/A
2010/10/06,CPA,CX906,MNL,HKG,A340-313X,HK|N/A|/6/51688_1444341754.jpg,??,10:50,13:30,N/A
2010/10/05,GAP,2P74,MPH,MNL,Dash8-Q314,RP|N/A|/5/53328_1457690683.jpg,??,??,??,N/A
2010/10/03,GAP,2P??,MNL,MPH,Dash8-Q314,RP|RP-C3016|/3/92542_1334287404.jpg,??,??,??,N/A
2010/10/02,CPA,CX918,HKG,MNL,B744,HK|N/A|/6/79922_1417706255.jpg,712,14:20,16:35,N/A
2010/10/02,HDA,KA831,PVG,HKG,A330-342,HK|B-HYF|/1/27982_1299503451.jpg,781,08:40,11:35,N/A
2010/08/31,PAL,PR336,MNL,PVG,A330-301,RP|N/A|/4/79172_1321131511.jpg,1152,12:05,15:50,N/A
2010/08/26,PAL,PR337,PVG,MNL,A330-301,RP|N/A|/6/17299_1586238940.jpg,1152,16:55,20:50,N/A
2010/06/29,AMU,NX110,MFM,PVG,A319-132,MO|N/A|/2/49528_1214997745.jpg,803,??,??,N/A
2010/06/25,AMU,NX107,PVG,MFM,A319-132,MO|N/A|/1/56248_1117980108.jpg,803,??,??,N/A`;
    return {
      raw: raw,
      content: content,
      airlines: airlines,
      airports: airports,
    };
  },
};
</script>
