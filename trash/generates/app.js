
var cont = document.getElementById('cy');

var cy = cytoscape({

// ready: function() {
//   /33 33'#cont').cytoscapeNavigator();
// },

container: cont, // container to render in

elements: [ // list of graph elements to start with
{ // node BCG0163c
  data: { id: 'BCG0163c' }
},
{ // node BCG0389
  data: { id: 'BCG0389' }
},
{ // node BCG0479
  data: { id: 'BCG0479' }
},
{ // node BCG1281
  data: { id: 'BCG1281' }
},
{ // node BCG1426c
  data: { id: 'BCG1426c' }
},
{ // node BCG1776c
  data: { id: 'BCG1776c' }
},
{ // node BCG1947c
  data: { id: 'BCG1947c' }
},
{ // node BCG1948c
  data: { id: 'BCG1948c' }
},
{ // node BCG2716
  data: { id: 'BCG2716' }
},
{ // node BCG2724
  data: { id: 'BCG2724' }
},
{ // node BCG2897
  data: { id: 'BCG2897' }
},
{ // node BCG2962c
  data: { id: 'BCG2962c' }
},
{ // node BCG3487c
  data: { id: 'BCG3487c' }
},
{ // node BCG3865c
  data: { id: 'BCG3865c' }
},
{ // node BCG3866c
  data: { id: 'BCG3866c' }
},
{ // node BCG3917c
  data: { id: 'BCG3917c' }
},
{ // node L5p71
  data: { id: 'L5p71' }
},
{ // node L5p88
  data: { id: 'L5p88' }
},
{ // node MAP2028c
  data: { id: 'MAP2028c' }
},
{ // node ML1795
  data: { id: 'ML1795' }
},
{ // node ML2041
  data: { id: 'ML2041' }
},
{ // node ML2042
  data: { id: 'ML2042' }
},
{ // node MLr01
  data: { id: 'MLr01' }
},
{ // node MSMEG_0005
  data: { id: 'MSMEG_0005' }
},
{ // node MSMEG_0014
  data: { id: 'MSMEG_0014' }
},
{ // node MSMEG_1398
  data: { id: 'MSMEG_1398' }
},
{ // node MSMEG_1914
  data: { id: 'MSMEG_1914' }
},
{ // node MSMEG_2750
  data: { id: 'MSMEG_2750' }
},
{ // node MSMEG_2752
  data: { id: 'MSMEG_2752' }
},
{ // node MSMEG_2758
  data: { id: 'MSMEG_2758' }
},
{ // node MSMEG_3757
  data: { id: 'MSMEG_3757' }
},
{ // node MSMEG_4931
  data: { id: 'MSMEG_4931' }
},
{ // node MSMEG_5072
  data: { id: 'MSMEG_5072' }
},
{ // node MSMEG_6257
  data: { id: 'MSMEG_6257' }
},
{ // node rRNA
  data: { id: 'rRNA' }
},
{ // node Rv0006
  data: { id: 'Rv0006' }
},
{ // node Rv0405
  data: { id: 'Rv0405' }
},
{ // node Rv0430
  data: { id: 'Rv0430' }
},
{ // node Rv0534c
  data: { id: 'Rv0534c' }
},
{ // node Rv0780
  data: { id: 'Rv0780' }
},
{ // node Rv0803
  data: { id: 'Rv0803' }
},
{ // node Rv1266c
  data: { id: 'Rv1266c' }
},
{ // node Rv1303
  data: { id: 'Rv1303' }
},
{ // node Rv1394c
  data: { id: 'Rv1394c' }
},
{ // node Rv1395
  data: { id: 'Rv1395' }
},
{ // node Rv1846c
  data: { id: 'Rv1846c' }
},
{ // node Rv1847
  data: { id: 'Rv1847' }
},
{ // node Rv1876
  data: { id: 'Rv1876' }
},
{ // node Rv1886c
  data: { id: 'Rv1886c' }
},
{ // node Rv1964
  data: { id: 'Rv1964' }
},
{ // node Rv2031c
  data: { id: 'Rv2031c' }
},
{ // node Rv2122c
  data: { id: 'Rv2122c' }
},
{ // node Rv2150c
  data: { id: 'Rv2150c' }
},
{ // node Rv2220
  data: { id: 'Rv2220' }
},
{ // node Rv2280
  data: { id: 'Rv2280' }
},
{ // node Rv2383c
  data: { id: 'Rv2383c' }
},
{ // node Rv2386c
  data: { id: 'Rv2386c' }
},
{ // node Rv2416c
  data: { id: 'Rv2416c' }
},
{ // node Rv2589
  data: { id: 'Rv2589' }
},
{ // node Rv2703
  data: { id: 'Rv2703' }
},
{ // node Rv2710
  data: { id: 'Rv2710' }
},
{ // node Rv2719c
  data: { id: 'Rv2719c' }
},
{ // node Rv2720
  data: { id: 'Rv2720' }
},
{ // node Rv2737c
  data: { id: 'Rv2737c' }
},
{ // node Rv3082c
  data: { id: 'Rv3082c' }
},
{ // node Rv3223c
  data: { id: 'Rv3223c' }
},
{ // node Rv3246c
  data: { id: 'Rv3246c' }
},
{ // node Rv3402c
  data: { id: 'Rv3402c' }
},
{ // node Rv3416
  data: { id: 'Rv3416' }
},
{ // node Rv3810
  data: { id: 'Rv3810' }
},
{ // node Rv3874
  data: { id: 'Rv3874' }
},
{ // node Rv0667
  data: { id: 'Rv0667' }
},
{ // node Rv1251c
  data: { id: 'Rv1251c' }
},
{ // node Rv1262c
  data: { id: 'Rv1262c' }
},
{ // node Rv2178c
  data: { id: 'Rv2178c' }
},
{ // node Rv2198c
  data: { id: 'Rv2198c' }
},
{ // node Rv2322c
  data: { id: 'Rv2322c' }
},
{ // node Rv2728c
  data: { id: 'Rv2728c' }
},
{ // node Rv2781c
  data: { id: 'Rv2781c' }
},
{ // node Rv2908c
  data: { id: 'Rv2908c' }
},
{ // node Rv3408
  data: { id: 'Rv3408' }
},
{ // node Rv3482c
  data: { id: 'Rv3482c' }
},
{ // node Rv3816c
  data: { id: 'Rv3816c' }
},
{ // node Rv2068c
  data: { id: 'Rv2068c' }
},
{ // node Rv1456c
  data: { id: 'Rv1456c' }
},
{ // node Rv3921c
  data: { id: 'Rv3921c' }
},
{ // node BCG0248
  data: { id: 'BCG0248' }
},
{ // node BCG1138c
  data: { id: 'BCG1138c' }
},
{ // node BCG3090
  data: { id: 'BCG3090' }
},
{ // node rrs
  data: { id: 'rrs' }
},
{ // node Rv0071
  data: { id: 'Rv0071' }
},
{ // node Rv0335c
  data: { id: 'Rv0335c' }
},
{ // node Rv0336
  data: { id: 'Rv0336' }
},
{ // node Rv0515
  data: { id: 'Rv0515' }
},
{ // node Rv1000c
  data: { id: 'Rv1000c' }
},
{ // node Rv1001
  data: { id: 'Rv1001' }
},
{ // node Rv1378c
  data: { id: 'Rv1378c' }
},
{ // node Rv1379
  data: { id: 'Rv1379' }
},
{ // node Rv1702c
  data: { id: 'Rv1702c' }
},
{ // node Rv2100
  data: { id: 'Rv2100' }
},
{ // node Rv2578c
  data: { id: 'Rv2578c' }
},
{ // node Rv2579
  data: { id: 'Rv2579' }
},
{ // node Rv2594c
  data: { id: 'Rv2594c' }
},
{ // node Rv2595
  data: { id: 'Rv2595' }
},
{ // node Rv3073c
  data: { id: 'Rv3073c' }
},
{ // node Rv3074
  data: { id: 'Rv3074' }
},
{ // node Rv3087
  data: { id: 'Rv3087' }
},
{ // node Rv3370c
  data: { id: 'Rv3370c' }
},
{ // node Rv3371
  data: { id: 'Rv3371' }
},
{ // node Rv3395c
  data: { id: 'Rv3395c' }
},
{ // node Rv3776
  data: { id: 'Rv3776' }
},
{ // node Rv0142
  data: { id: 'Rv0142' }
},
{ // node Rv0251c
  data: { id: 'Rv0251c' }
},
{ // node Rv0350
  data: { id: 'Rv0350' }
},
{ // node Rv0355c
  data: { id: 'Rv0355c' }
},
{ // node Rv0384c
  data: { id: 'Rv0384c' }
},
{ // node Rv0991c
  data: { id: 'Rv0991c' }
},
{ // node Rv1221
  data: { id: 'Rv1221' }
},
{ // node Rv1334
  data: { id: 'Rv1334' }
},
{ // node Rv1471
  data: { id: 'Rv1471' }
},
{ // node Rv1528c
  data: { id: 'Rv1528c' }
},
{ // node Rv1645c
  data: { id: 'Rv1645c' }
},
{ // node Rv2466c
  data: { id: 'Rv2466c' }
},
{ // node Rv2699c
  data: { id: 'Rv2699c' }
},
{ // node Rv2706c
  data: { id: 'Rv2706c' }
},
{ // node Rv3054c
  data: { id: 'Rv3054c' }
},
{ // node Rv3206c
  data: { id: 'Rv3206c' }
},
{ // node Rv3463
  data: { id: 'Rv3463' }
},
{ // node Rv3913
  data: { id: 'Rv3913' }
},
{ // node BCG3315c
  data: { id: 'BCG3315c' }
},
{ // node MT0011
  data: { id: 'MT0011' }
},
{ // node MT0014
  data: { id: 'MT0014' }
},
{ // node MT0015
  data: { id: 'MT0015' }
},
{ // node MT0026
  data: { id: 'MT0026' }
},
{ // node MT0215
  data: { id: 'MT0215' }
},
{ // node MT0343
  data: { id: 'MT0343' }
},
{ // node MT0376
  data: { id: 'MT0376' }
},
{ // node MT0445
  data: { id: 'MT0445' }
},
{ // node MT0537
  data: { id: 'MT0537' }
},
{ // node MT0762
  data: { id: 'MT0762' }
},
{ // node MT0917
  data: { id: 'MT0917' }
},
{ // node MT0990
  data: { id: 'MT0990' }
},
{ // node MT1124
  data: { id: 'MT1124' }
},
{ // node MT2178
  data: { id: 'MT2178' }
},
{ // node Rv3287c
  data: { id: 'Rv3287c' }
},
{ // node Rv0467
  data: { id: 'Rv0467' }
},
{ // node Rv0468
  data: { id: 'Rv0468' }
},
{ // node Rv0563
  data: { id: 'Rv0563' }
},
{ // node Rv0981
  data: { id: 'Rv0981' }
},
{ // node Rv1057
  data: { id: 'Rv1057' }
},
{ // node Rv1130
  data: { id: 'Rv1130' }
},
{ // node Rv1329c
  data: { id: 'Rv1329c' }
},
{ // node Rv2053c
  data: { id: 'Rv2053c' }
},
{ // node Rv2745c
  data: { id: 'Rv2745c' }
},
{ // node Rv0983
  data: { id: 'Rv0983' }
},
{ // node MT0040
  data: { id: 'MT0040' }
},
{ // node MT0327
  data: { id: 'MT0327' }
},
{ // node MT0497
  data: { id: 'MT0497' }
},
{ // node MT0680
  data: { id: 'MT0680' }
},
{ // node MT0713
  data: { id: 'MT0713' }
},
{ // node MT2973
  data: { id: 'MT2973' }
},
{ // node MT3067
  data: { id: 'MT3067' }
},
{ // node MT3176
  data: { id: 'MT3176' }
},
{ // node MT3177
  data: { id: 'MT3177' }
},
{ // node MT3179
  data: { id: 'MT3179' }
},
{ // node MT3544
  data: { id: 'MT3544' }
},
{ // node MT3545
  data: { id: 'MT3545' }
},
{ // node MT3549
  data: { id: 'MT3549' }
},
{ // node MT3550
  data: { id: 'MT3550' }
},
{ // node MT3553
  data: { id: 'MT3553' }
},
{ // node MT3554
  data: { id: 'MT3554' }
},
{ // node MT3555
  data: { id: 'MT3555' }
},
{ // node MT4023
  data: { id: 'MT4023' }
},
{ // node MT4024
  data: { id: 'MT4024' }
},
{ // node MT4025
  data: { id: 'MT4025' }
},
{ // node MT4026
  data: { id: 'MT4026' }
},
{ // node Rv2009
  data: { id: 'Rv2009' }
},
{ // node Rv3094c
  data: { id: 'Rv3094c' }
},
{ // node Rv3133c
  data: { id: 'Rv3133c' }
},
{ // node Rv0735
  data: { id: 'Rv0735' }
},
{ // node Rv3286c
  data: { id: 'Rv3286c' }
},
{ // node Rv0182c
  data: { id: 'Rv0182c' }
},
{ // node Rv3911
  data: { id: 'Rv3911' }
},
{ // node Rv0757
  data: { id: 'Rv0757' }
},
{ // edge Rv2703.BCG0163c
  data: { id: 'Rv2703.BCG0163c', source: 'Rv2703', target: 'BCG0163c' }
}
		
,
{ // edge Rv2703.BCG0389
  data: { id: 'Rv2703.BCG0389', source: 'Rv2703', target: 'BCG0389' }
}
		
,
{ // edge Rv2703.BCG0479
  data: { id: 'Rv2703.BCG0479', source: 'Rv2703', target: 'BCG0479' }
}
		
,
{ // edge Rv2703.BCG1281
  data: { id: 'Rv2703.BCG1281', source: 'Rv2703', target: 'BCG1281' }
}
		
,
{ // edge Rv2703.BCG1426c
  data: { id: 'Rv2703.BCG1426c', source: 'Rv2703', target: 'BCG1426c' }
}
		
,
{ // edge Rv2703.BCG1776c
  data: { id: 'Rv2703.BCG1776c', source: 'Rv2703', target: 'BCG1776c' }
}
		
,
{ // edge Rv2703.BCG1947c
  data: { id: 'Rv2703.BCG1947c', source: 'Rv2703', target: 'BCG1947c' }
}
		
,
{ // edge Rv2703.BCG1948c
  data: { id: 'Rv2703.BCG1948c', source: 'Rv2703', target: 'BCG1948c' }
}
		
,
{ // edge Rv2703.BCG2716
  data: { id: 'Rv2703.BCG2716', source: 'Rv2703', target: 'BCG2716' }
}
		
,
{ // edge Rv2703.BCG2724
  data: { id: 'Rv2703.BCG2724', source: 'Rv2703', target: 'BCG2724' }
}
		
,
{ // edge Rv2703.BCG2897
  data: { id: 'Rv2703.BCG2897', source: 'Rv2703', target: 'BCG2897' }
}
		
,
{ // edge Rv2703.BCG2962c
  data: { id: 'Rv2703.BCG2962c', source: 'Rv2703', target: 'BCG2962c' }
}
		
,
{ // edge Rv2703.BCG3487c
  data: { id: 'Rv2703.BCG3487c', source: 'Rv2703', target: 'BCG3487c' }
}
		
,
{ // edge Rv2703.BCG3865c
  data: { id: 'Rv2703.BCG3865c', source: 'Rv2703', target: 'BCG3865c' }
}
		
,
{ // edge Rv2703.BCG3866c
  data: { id: 'Rv2703.BCG3866c', source: 'Rv2703', target: 'BCG3866c' }
}
		
,
{ // edge Rv2703.BCG3917c
  data: { id: 'Rv2703.BCG3917c', source: 'Rv2703', target: 'BCG3917c' }
}
		
,
{ // edge Rv2703.L5p71
  data: { id: 'Rv2703.L5p71', source: 'Rv2703', target: 'L5p71' }
}
		
,
{ // edge Rv2703.L5p88
  data: { id: 'Rv2703.L5p88', source: 'Rv2703', target: 'L5p88' }
}
		
,
{ // edge Rv2703.MAP2028c
  data: { id: 'Rv2703.MAP2028c', source: 'Rv2703', target: 'MAP2028c' }
}
		
,
{ // edge Rv2703.ML1795
  data: { id: 'Rv2703.ML1795', source: 'Rv2703', target: 'ML1795' }
}
		
,
{ // edge Rv2703.ML2041
  data: { id: 'Rv2703.ML2041', source: 'Rv2703', target: 'ML2041' }
}
		
,
{ // edge Rv2703.ML2042
  data: { id: 'Rv2703.ML2042', source: 'Rv2703', target: 'ML2042' }
}
		
,
{ // edge Rv2703.MLr01
  data: { id: 'Rv2703.MLr01', source: 'Rv2703', target: 'MLr01' }
}
		
,
{ // edge Rv2703.MSMEG_0005
  data: { id: 'Rv2703.MSMEG_0005', source: 'Rv2703', target: 'MSMEG_0005' }
}
		
,
{ // edge Rv2703.MSMEG_0014
  data: { id: 'Rv2703.MSMEG_0014', source: 'Rv2703', target: 'MSMEG_0014' }
}
		
,
{ // edge Rv2703.MSMEG_1398
  data: { id: 'Rv2703.MSMEG_1398', source: 'Rv2703', target: 'MSMEG_1398' }
}
		
,
{ // edge Rv2703.MSMEG_1914
  data: { id: 'Rv2703.MSMEG_1914', source: 'Rv2703', target: 'MSMEG_1914' }
}
		
,
{ // edge Rv2703.MSMEG_2750
  data: { id: 'Rv2703.MSMEG_2750', source: 'Rv2703', target: 'MSMEG_2750' }
}
		
,
{ // edge Rv2703.MSMEG_2752
  data: { id: 'Rv2703.MSMEG_2752', source: 'Rv2703', target: 'MSMEG_2752' }
}
		
,
{ // edge Rv2703.MSMEG_2758
  data: { id: 'Rv2703.MSMEG_2758', source: 'Rv2703', target: 'MSMEG_2758' }
}
		
,
{ // edge Rv2703.MSMEG_3757
  data: { id: 'Rv2703.MSMEG_3757', source: 'Rv2703', target: 'MSMEG_3757' }
}
		
,
{ // edge Rv2703.MSMEG_4931
  data: { id: 'Rv2703.MSMEG_4931', source: 'Rv2703', target: 'MSMEG_4931' }
}
		
,
{ // edge Rv2703.MSMEG_5072
  data: { id: 'Rv2703.MSMEG_5072', source: 'Rv2703', target: 'MSMEG_5072' }
}
		
,
{ // edge Rv2703.MSMEG_6257
  data: { id: 'Rv2703.MSMEG_6257', source: 'Rv2703', target: 'MSMEG_6257' }
}
		
,
{ // edge Rv2703.rRNA
  data: { id: 'Rv2703.rRNA', source: 'Rv2703', target: 'rRNA' }
}
		
,
{ // edge Rv2703.Rv0006
  data: { id: 'Rv2703.Rv0006', source: 'Rv2703', target: 'Rv0006' }
}
		
,
{ // edge Rv2703.Rv0405
  data: { id: 'Rv2703.Rv0405', source: 'Rv2703', target: 'Rv0405' }
}
		
,
{ // edge Rv2703.Rv0430
  data: { id: 'Rv2703.Rv0430', source: 'Rv2703', target: 'Rv0430' }
}
		
,
{ // edge Rv2703.Rv0534c
  data: { id: 'Rv2703.Rv0534c', source: 'Rv2703', target: 'Rv0534c' }
}
		
,
{ // edge Rv2703.Rv0780
  data: { id: 'Rv2703.Rv0780', source: 'Rv2703', target: 'Rv0780' }
}
		
,
{ // edge Rv2703.Rv0803
  data: { id: 'Rv2703.Rv0803', source: 'Rv2703', target: 'Rv0803' }
}
		
,
{ // edge Rv2703.Rv1266c
  data: { id: 'Rv2703.Rv1266c', source: 'Rv2703', target: 'Rv1266c' }
}
		
,
{ // edge Rv2703.Rv1303
  data: { id: 'Rv2703.Rv1303', source: 'Rv2703', target: 'Rv1303' }
}
		
,
{ // edge Rv2703.Rv1394c
  data: { id: 'Rv2703.Rv1394c', source: 'Rv2703', target: 'Rv1394c' }
}
		
,
{ // edge Rv2703.Rv1395
  data: { id: 'Rv2703.Rv1395', source: 'Rv2703', target: 'Rv1395' }
}
		
,
{ // edge Rv2703.Rv1846c
  data: { id: 'Rv2703.Rv1846c', source: 'Rv2703', target: 'Rv1846c' }
}
		
,
{ // edge Rv2703.Rv1847
  data: { id: 'Rv2703.Rv1847', source: 'Rv2703', target: 'Rv1847' }
}
		
,
{ // edge Rv2703.Rv1876
  data: { id: 'Rv2703.Rv1876', source: 'Rv2703', target: 'Rv1876' }
}
		
,
{ // edge Rv2703.Rv1886c
  data: { id: 'Rv2703.Rv1886c', source: 'Rv2703', target: 'Rv1886c' }
}
		
,
{ // edge Rv2703.Rv1964
  data: { id: 'Rv2703.Rv1964', source: 'Rv2703', target: 'Rv1964' }
}
		
,
{ // edge Rv2703.Rv2031c
  data: { id: 'Rv2703.Rv2031c', source: 'Rv2703', target: 'Rv2031c' }
}
		
,
{ // edge Rv2703.Rv2122c
  data: { id: 'Rv2703.Rv2122c', source: 'Rv2703', target: 'Rv2122c' }
}
		
,
{ // edge Rv2703.Rv2150c
  data: { id: 'Rv2703.Rv2150c', source: 'Rv2703', target: 'Rv2150c' }
}
		
,
{ // edge Rv2703.Rv2220
  data: { id: 'Rv2703.Rv2220', source: 'Rv2703', target: 'Rv2220' }
}
		
,
{ // edge Rv2703.Rv2280
  data: { id: 'Rv2703.Rv2280', source: 'Rv2703', target: 'Rv2280' }
}
		
,
{ // edge Rv2703.Rv2383c
  data: { id: 'Rv2703.Rv2383c', source: 'Rv2703', target: 'Rv2383c' }
}
		
,
{ // edge Rv2703.Rv2386c
  data: { id: 'Rv2703.Rv2386c', source: 'Rv2703', target: 'Rv2386c' }
}
		
,
{ // edge Rv2703.Rv2416c
  data: { id: 'Rv2703.Rv2416c', source: 'Rv2703', target: 'Rv2416c' }
}
		
,
{ // edge Rv2703.Rv2589
  data: { id: 'Rv2703.Rv2589', source: 'Rv2703', target: 'Rv2589' }
}
		
,
{ // edge Rv2703.Rv2703
  data: { id: 'Rv2703.Rv2703', source: 'Rv2703', target: 'Rv2703' }
}
		
,
{ // edge Rv2703.Rv2710
  data: { id: 'Rv2703.Rv2710', source: 'Rv2703', target: 'Rv2710' }
}
		
,
{ // edge Rv2703.Rv2719c
  data: { id: 'Rv2703.Rv2719c', source: 'Rv2703', target: 'Rv2719c' }
}
		
,
{ // edge Rv2703.Rv2720
  data: { id: 'Rv2703.Rv2720', source: 'Rv2703', target: 'Rv2720' }
}
		
,
{ // edge Rv2703.Rv2737c
  data: { id: 'Rv2703.Rv2737c', source: 'Rv2703', target: 'Rv2737c' }
}
		
,
{ // edge Rv2703.Rv3082c
  data: { id: 'Rv2703.Rv3082c', source: 'Rv2703', target: 'Rv3082c' }
}
		
,
{ // edge Rv2703.Rv3223c
  data: { id: 'Rv2703.Rv3223c', source: 'Rv2703', target: 'Rv3223c' }
}
		
,
{ // edge Rv2703.Rv3246c
  data: { id: 'Rv2703.Rv3246c', source: 'Rv2703', target: 'Rv3246c' }
}
		
,
{ // edge Rv2703.Rv3402c
  data: { id: 'Rv2703.Rv3402c', source: 'Rv2703', target: 'Rv3402c' }
}
		
,
{ // edge Rv2703.Rv3416
  data: { id: 'Rv2703.Rv3416', source: 'Rv2703', target: 'Rv3416' }
}
		
,
{ // edge Rv2703.Rv3810
  data: { id: 'Rv2703.Rv3810', source: 'Rv2703', target: 'Rv3810' }
}
		
,
{ // edge Rv2703.Rv3874
  data: { id: 'Rv2703.Rv3874', source: 'Rv2703', target: 'Rv3874' }
}
		
,
{ // edge Rv1395.Rv0667
  data: { id: 'Rv1395.Rv0667', source: 'Rv1395', target: 'Rv0667' }
}
		
,
{ // edge Rv1395.Rv1251c
  data: { id: 'Rv1395.Rv1251c', source: 'Rv1395', target: 'Rv1251c' }
}
		
,
{ // edge Rv1395.Rv1262c
  data: { id: 'Rv1395.Rv1262c', source: 'Rv1395', target: 'Rv1262c' }
}
		
,
{ // edge Rv1395.Rv1395
  data: { id: 'Rv1395.Rv1395', source: 'Rv1395', target: 'Rv1395' }
}
		
,
{ // edge Rv1395.Rv2178c
  data: { id: 'Rv1395.Rv2178c', source: 'Rv1395', target: 'Rv2178c' }
}
		
,
{ // edge Rv1395.Rv2198c
  data: { id: 'Rv1395.Rv2198c', source: 'Rv1395', target: 'Rv2198c' }
}
		
,
{ // edge Rv1395.Rv2322c
  data: { id: 'Rv1395.Rv2322c', source: 'Rv1395', target: 'Rv2322c' }
}
		
,
{ // edge Rv1395.Rv2728c
  data: { id: 'Rv1395.Rv2728c', source: 'Rv1395', target: 'Rv2728c' }
}
		
,
{ // edge Rv1395.Rv2781c
  data: { id: 'Rv1395.Rv2781c', source: 'Rv1395', target: 'Rv2781c' }
}
		
,
{ // edge Rv1395.Rv2908c
  data: { id: 'Rv1395.Rv2908c', source: 'Rv1395', target: 'Rv2908c' }
}
		
,
{ // edge Rv1395.Rv3408
  data: { id: 'Rv1395.Rv3408', source: 'Rv1395', target: 'Rv3408' }
}
		
,
{ // edge Rv1395.Rv3482c
  data: { id: 'Rv1395.Rv3482c', source: 'Rv1395', target: 'Rv3482c' }
}
		
,
{ // edge Rv1395.Rv3816c
  data: { id: 'Rv1395.Rv3816c', source: 'Rv1395', target: 'Rv3816c' }
}
		
,
{ // edge Rv1846c.Rv1846c
  data: { id: 'Rv1846c.Rv1846c', source: 'Rv1846c', target: 'Rv1846c' }
}
		
,
{ // edge Rv1846c.Rv2068c
  data: { id: 'Rv1846c.Rv2068c', source: 'Rv1846c', target: 'Rv2068c' }
}
		
,
{ // edge Rv1846c.Rv1456c
  data: { id: 'Rv1846c.Rv1456c', source: 'Rv1846c', target: 'Rv1456c' }
}
		
,
{ // edge Rv1846c.Rv1303
  data: { id: 'Rv1846c.Rv1303', source: 'Rv1846c', target: 'Rv1303' }
}
		
,
{ // edge Rv1846c.Rv3921c
  data: { id: 'Rv1846c.Rv3921c', source: 'Rv1846c', target: 'Rv3921c' }
}
		
,
{ // edge Rv2710.BCG0248
  data: { id: 'Rv2710.BCG0248', source: 'Rv2710', target: 'BCG0248' }
}
		
,
{ // edge Rv2710.BCG1138c
  data: { id: 'Rv2710.BCG1138c', source: 'Rv2710', target: 'BCG1138c' }
}
		
,
{ // edge Rv2710.BCG2716
  data: { id: 'Rv2710.BCG2716', source: 'Rv2710', target: 'BCG2716' }
}
		
,
{ // edge Rv2710.BCG3090
  data: { id: 'Rv2710.BCG3090', source: 'Rv2710', target: 'BCG3090' }
}
		
,
{ // edge Rv2710.rrs
  data: { id: 'Rv2710.rrs', source: 'Rv2710', target: 'rrs' }
}
		
,
{ // edge Rv2720.Rv0071
  data: { id: 'Rv2720.Rv0071', source: 'Rv2720', target: 'Rv0071' }
}
		
,
{ // edge Rv2720.Rv0335c
  data: { id: 'Rv2720.Rv0335c', source: 'Rv2720', target: 'Rv0335c' }
}
		
,
{ // edge Rv2720.Rv0336
  data: { id: 'Rv2720.Rv0336', source: 'Rv2720', target: 'Rv0336' }
}
		
,
{ // edge Rv2720.Rv0515
  data: { id: 'Rv2720.Rv0515', source: 'Rv2720', target: 'Rv0515' }
}
		
,
{ // edge Rv2720.Rv1000c
  data: { id: 'Rv2720.Rv1000c', source: 'Rv2720', target: 'Rv1000c' }
}
		
,
{ // edge Rv2720.Rv1001
  data: { id: 'Rv2720.Rv1001', source: 'Rv2720', target: 'Rv1001' }
}
		
,
{ // edge Rv2720.Rv1378c
  data: { id: 'Rv2720.Rv1378c', source: 'Rv2720', target: 'Rv1378c' }
}
		
,
{ // edge Rv2720.Rv1379
  data: { id: 'Rv2720.Rv1379', source: 'Rv2720', target: 'Rv1379' }
}
		
,
{ // edge Rv2720.Rv1702c
  data: { id: 'Rv2720.Rv1702c', source: 'Rv2720', target: 'Rv1702c' }
}
		
,
{ // edge Rv2720.Rv2100
  data: { id: 'Rv2720.Rv2100', source: 'Rv2720', target: 'Rv2100' }
}
		
,
{ // edge Rv2720.Rv2578c
  data: { id: 'Rv2720.Rv2578c', source: 'Rv2720', target: 'Rv2578c' }
}
		
,
{ // edge Rv2720.Rv2579
  data: { id: 'Rv2720.Rv2579', source: 'Rv2720', target: 'Rv2579' }
}
		
,
{ // edge Rv2720.Rv2594c
  data: { id: 'Rv2720.Rv2594c', source: 'Rv2720', target: 'Rv2594c' }
}
		
,
{ // edge Rv2720.Rv2595
  data: { id: 'Rv2720.Rv2595', source: 'Rv2720', target: 'Rv2595' }
}
		
,
{ // edge Rv2720.Rv2719c
  data: { id: 'Rv2720.Rv2719c', source: 'Rv2720', target: 'Rv2719c' }
}
		
,
{ // edge Rv2720.Rv2720
  data: { id: 'Rv2720.Rv2720', source: 'Rv2720', target: 'Rv2720' }
}
		
,
{ // edge Rv2720.Rv2737c
  data: { id: 'Rv2720.Rv2737c', source: 'Rv2720', target: 'Rv2737c' }
}
		
,
{ // edge Rv2720.Rv3073c
  data: { id: 'Rv2720.Rv3073c', source: 'Rv2720', target: 'Rv3073c' }
}
		
,
{ // edge Rv2720.Rv3074
  data: { id: 'Rv2720.Rv3074', source: 'Rv2720', target: 'Rv3074' }
}
		
,
{ // edge Rv2720.Rv3087
  data: { id: 'Rv2720.Rv3087', source: 'Rv2720', target: 'Rv3087' }
}
		
,
{ // edge Rv2720.Rv3370c
  data: { id: 'Rv2720.Rv3370c', source: 'Rv2720', target: 'Rv3370c' }
}
		
,
{ // edge Rv2720.Rv3371
  data: { id: 'Rv2720.Rv3371', source: 'Rv2720', target: 'Rv3371' }
}
		
,
{ // edge Rv2720.Rv3395c
  data: { id: 'Rv2720.Rv3395c', source: 'Rv2720', target: 'Rv3395c' }
}
		
,
{ // edge Rv2720.Rv3776
  data: { id: 'Rv2720.Rv3776', source: 'Rv2720', target: 'Rv3776' }
}
		
,
{ // edge Rv3223c.Rv0142
  data: { id: 'Rv3223c.Rv0142', source: 'Rv3223c', target: 'Rv0142' }
}
		
,
{ // edge Rv3223c.Rv0251c
  data: { id: 'Rv3223c.Rv0251c', source: 'Rv3223c', target: 'Rv0251c' }
}
		
,
{ // edge Rv3223c.Rv0350
  data: { id: 'Rv3223c.Rv0350', source: 'Rv3223c', target: 'Rv0350' }
}
		
,
{ // edge Rv3223c.Rv0355c
  data: { id: 'Rv3223c.Rv0355c', source: 'Rv3223c', target: 'Rv0355c' }
}
		
,
{ // edge Rv3223c.Rv0384c
  data: { id: 'Rv3223c.Rv0384c', source: 'Rv3223c', target: 'Rv0384c' }
}
		
,
{ // edge Rv3223c.Rv0991c
  data: { id: 'Rv3223c.Rv0991c', source: 'Rv3223c', target: 'Rv0991c' }
}
		
,
{ // edge Rv3223c.Rv1221
  data: { id: 'Rv3223c.Rv1221', source: 'Rv3223c', target: 'Rv1221' }
}
		
,
{ // edge Rv3223c.Rv1334
  data: { id: 'Rv3223c.Rv1334', source: 'Rv3223c', target: 'Rv1334' }
}
		
,
{ // edge Rv3223c.Rv1471
  data: { id: 'Rv3223c.Rv1471', source: 'Rv3223c', target: 'Rv1471' }
}
		
,
{ // edge Rv3223c.Rv1528c
  data: { id: 'Rv3223c.Rv1528c', source: 'Rv3223c', target: 'Rv1528c' }
}
		
,
{ // edge Rv3223c.Rv1645c
  data: { id: 'Rv3223c.Rv1645c', source: 'Rv3223c', target: 'Rv1645c' }
}
		
,
{ // edge Rv3223c.Rv2466c
  data: { id: 'Rv3223c.Rv2466c', source: 'Rv3223c', target: 'Rv2466c' }
}
		
,
{ // edge Rv3223c.Rv2699c
  data: { id: 'Rv3223c.Rv2699c', source: 'Rv3223c', target: 'Rv2699c' }
}
		
,
{ // edge Rv3223c.Rv2706c
  data: { id: 'Rv3223c.Rv2706c', source: 'Rv3223c', target: 'Rv2706c' }
}
		
,
{ // edge Rv3223c.Rv2710
  data: { id: 'Rv3223c.Rv2710', source: 'Rv3223c', target: 'Rv2710' }
}
		
,
{ // edge Rv3223c.Rv3054c
  data: { id: 'Rv3223c.Rv3054c', source: 'Rv3223c', target: 'Rv3054c' }
}
		
,
{ // edge Rv3223c.Rv3206c
  data: { id: 'Rv3223c.Rv3206c', source: 'Rv3223c', target: 'Rv3206c' }
}
		
,
{ // edge Rv3223c.Rv3223c
  data: { id: 'Rv3223c.Rv3223c', source: 'Rv3223c', target: 'Rv3223c' }
}
		
,
{ // edge Rv3223c.Rv3463
  data: { id: 'Rv3223c.Rv3463', source: 'Rv3223c', target: 'Rv3463' }
}
		
,
{ // edge Rv3223c.Rv3913
  data: { id: 'Rv3223c.Rv3913', source: 'Rv3223c', target: 'Rv3913' }
}
		
,
{ // edge Rv3286c.BCG1281
  data: { id: 'Rv3286c.BCG1281', source: 'Rv3286c', target: 'BCG1281' }
}
		
,
{ // edge Rv3286c.BCG3315c
  data: { id: 'Rv3286c.BCG3315c', source: 'Rv3286c', target: 'BCG3315c' }
}
		
,
{ // edge Rv3286c.MT0011
  data: { id: 'Rv3286c.MT0011', source: 'Rv3286c', target: 'MT0011' }
}
		
,
{ // edge Rv3286c.MT0014
  data: { id: 'Rv3286c.MT0014', source: 'Rv3286c', target: 'MT0014' }
}
		
,
{ // edge Rv3286c.MT0015
  data: { id: 'Rv3286c.MT0015', source: 'Rv3286c', target: 'MT0015' }
}
		
,
{ // edge Rv3286c.MT0026
  data: { id: 'Rv3286c.MT0026', source: 'Rv3286c', target: 'MT0026' }
}
		
,
{ // edge Rv3286c.MT0215
  data: { id: 'Rv3286c.MT0215', source: 'Rv3286c', target: 'MT0215' }
}
		
,
{ // edge Rv3286c.MT0343
  data: { id: 'Rv3286c.MT0343', source: 'Rv3286c', target: 'MT0343' }
}
		
,
{ // edge Rv3286c.MT0376
  data: { id: 'Rv3286c.MT0376', source: 'Rv3286c', target: 'MT0376' }
}
		
,
{ // edge Rv3286c.MT0445
  data: { id: 'Rv3286c.MT0445', source: 'Rv3286c', target: 'MT0445' }
}
		
,
{ // edge Rv3286c.MT0537
  data: { id: 'Rv3286c.MT0537', source: 'Rv3286c', target: 'MT0537' }
}
		
,
{ // edge Rv3286c.MT0762
  data: { id: 'Rv3286c.MT0762', source: 'Rv3286c', target: 'MT0762' }
}
		
,
{ // edge Rv3286c.MT0917
  data: { id: 'Rv3286c.MT0917', source: 'Rv3286c', target: 'MT0917' }
}
		
,
{ // edge Rv3286c.MT0990
  data: { id: 'Rv3286c.MT0990', source: 'Rv3286c', target: 'MT0990' }
}
		
,
{ // edge Rv3286c.MT1124
  data: { id: 'Rv3286c.MT1124', source: 'Rv3286c', target: 'MT1124' }
}
		
,
{ // edge Rv3286c.MT2178
  data: { id: 'Rv3286c.MT2178', source: 'Rv3286c', target: 'MT2178' }
}
		
,
{ // edge Rv3286c.Rv2710
  data: { id: 'Rv3286c.Rv2710', source: 'Rv3286c', target: 'Rv2710' }
}
		
,
{ // edge Rv3286c.Rv3287c
  data: { id: 'Rv3286c.Rv3287c', source: 'Rv3286c', target: 'Rv3287c' }
}
		
,
{ // edge Rv1221.Rv0251c
  data: { id: 'Rv1221.Rv0251c', source: 'Rv1221', target: 'Rv0251c' }
}
		
,
{ // edge Rv1221.Rv0467
  data: { id: 'Rv1221.Rv0467', source: 'Rv1221', target: 'Rv0467' }
}
		
,
{ // edge Rv1221.Rv0468
  data: { id: 'Rv1221.Rv0468', source: 'Rv1221', target: 'Rv0468' }
}
		
,
{ // edge Rv1221.Rv0563
  data: { id: 'Rv1221.Rv0563', source: 'Rv1221', target: 'Rv0563' }
}
		
,
{ // edge Rv1221.Rv0981
  data: { id: 'Rv1221.Rv0981', source: 'Rv1221', target: 'Rv0981' }
}
		
,
{ // edge Rv1221.Rv1057
  data: { id: 'Rv1221.Rv1057', source: 'Rv1221', target: 'Rv1057' }
}
		
,
{ // edge Rv1221.Rv1130
  data: { id: 'Rv1221.Rv1130', source: 'Rv1221', target: 'Rv1130' }
}
		
,
{ // edge Rv1221.Rv1329c
  data: { id: 'Rv1221.Rv1329c', source: 'Rv1221', target: 'Rv1329c' }
}
		
,
{ // edge Rv1221.Rv2053c
  data: { id: 'Rv1221.Rv2053c', source: 'Rv1221', target: 'Rv2053c' }
}
		
,
{ // edge Rv1221.Rv2710
  data: { id: 'Rv1221.Rv2710', source: 'Rv1221', target: 'Rv2710' }
}
		
,
{ // edge Rv1221.Rv2745c
  data: { id: 'Rv1221.Rv2745c', source: 'Rv1221', target: 'Rv2745c' }
}
		
,
{ // edge Rv0981.Rv0981
  data: { id: 'Rv0981.Rv0981', source: 'Rv0981', target: 'Rv0981' }
}
		
,
{ // edge Rv0981.Rv0983
  data: { id: 'Rv0981.Rv0983', source: 'Rv0981', target: 'Rv0983' }
}
		
,
{ // edge Rv0182c.Rv2594c
  data: { id: 'Rv0182c.Rv2594c', source: 'Rv0182c', target: 'Rv2594c' }
}
		
,
{ // edge Rv0182c.Rv3370c
  data: { id: 'Rv0182c.Rv3370c', source: 'Rv0182c', target: 'Rv3370c' }
}
		
,
{ // edge Rv0182c.Rv0251c
  data: { id: 'Rv0182c.Rv0251c', source: 'Rv0182c', target: 'Rv0251c' }
}
		
,
{ // edge Rv0182c.Rv0350
  data: { id: 'Rv0182c.Rv0350', source: 'Rv0182c', target: 'Rv0350' }
}
		
,
{ // edge Rv0182c.Rv0384c
  data: { id: 'Rv0182c.Rv0384c', source: 'Rv0182c', target: 'Rv0384c' }
}
		
,
{ // edge Rv0182c.Rv2466c
  data: { id: 'Rv0182c.Rv2466c', source: 'Rv0182c', target: 'Rv2466c' }
}
		
,
{ // edge Rv0182c.Rv3913
  data: { id: 'Rv0182c.Rv3913', source: 'Rv0182c', target: 'Rv3913' }
}
		
,
{ // edge Rv0182c.Rv1329c
  data: { id: 'Rv0182c.Rv1329c', source: 'Rv0182c', target: 'Rv1329c' }
}
		
,
{ // edge Rv3911.MT0040
  data: { id: 'Rv3911.MT0040', source: 'Rv3911', target: 'MT0040' }
}
		
,
{ // edge Rv3911.MT0327
  data: { id: 'Rv3911.MT0327', source: 'Rv3911', target: 'MT0327' }
}
		
,
{ // edge Rv3911.MT0497
  data: { id: 'Rv3911.MT0497', source: 'Rv3911', target: 'MT0497' }
}
		
,
{ // edge Rv3911.MT0680
  data: { id: 'Rv3911.MT0680', source: 'Rv3911', target: 'MT0680' }
}
		
,
{ // edge Rv3911.MT0713
  data: { id: 'Rv3911.MT0713', source: 'Rv3911', target: 'MT0713' }
}
		
,
{ // edge Rv3911.MT2973
  data: { id: 'Rv3911.MT2973', source: 'Rv3911', target: 'MT2973' }
}
		
,
{ // edge Rv3911.MT3067
  data: { id: 'Rv3911.MT3067', source: 'Rv3911', target: 'MT3067' }
}
		
,
{ // edge Rv3911.MT3176
  data: { id: 'Rv3911.MT3176', source: 'Rv3911', target: 'MT3176' }
}
		
,
{ // edge Rv3911.MT3177
  data: { id: 'Rv3911.MT3177', source: 'Rv3911', target: 'MT3177' }
}
		
,
{ // edge Rv3911.MT3179
  data: { id: 'Rv3911.MT3179', source: 'Rv3911', target: 'MT3179' }
}
		
,
{ // edge Rv3911.MT3544
  data: { id: 'Rv3911.MT3544', source: 'Rv3911', target: 'MT3544' }
}
		
,
{ // edge Rv3911.MT3545
  data: { id: 'Rv3911.MT3545', source: 'Rv3911', target: 'MT3545' }
}
		
,
{ // edge Rv3911.MT3549
  data: { id: 'Rv3911.MT3549', source: 'Rv3911', target: 'MT3549' }
}
		
,
{ // edge Rv3911.MT3550
  data: { id: 'Rv3911.MT3550', source: 'Rv3911', target: 'MT3550' }
}
		
,
{ // edge Rv3911.MT3553
  data: { id: 'Rv3911.MT3553', source: 'Rv3911', target: 'MT3553' }
}
		
,
{ // edge Rv3911.MT3554
  data: { id: 'Rv3911.MT3554', source: 'Rv3911', target: 'MT3554' }
}
		
,
{ // edge Rv3911.MT3555
  data: { id: 'Rv3911.MT3555', source: 'Rv3911', target: 'MT3555' }
}
		
,
{ // edge Rv3911.MT4023
  data: { id: 'Rv3911.MT4023', source: 'Rv3911', target: 'MT4023' }
}
		
,
{ // edge Rv3911.MT4024
  data: { id: 'Rv3911.MT4024', source: 'Rv3911', target: 'MT4024' }
}
		
,
{ // edge Rv3911.MT4025
  data: { id: 'Rv3911.MT4025', source: 'Rv3911', target: 'MT4025' }
}
		
,
{ // edge Rv3911.MT4026
  data: { id: 'Rv3911.MT4026', source: 'Rv3911', target: 'MT4026' }
}
		
,
{ // edge Rv3911.Rv2009
  data: { id: 'Rv3911.Rv2009', source: 'Rv3911', target: 'Rv2009' }
}
		
,
{ // edge Rv3911.Rv2053c
  data: { id: 'Rv3911.Rv2053c', source: 'Rv3911', target: 'Rv2053c' }
}
		
,
{ // edge Rv3911.Rv3094c
  data: { id: 'Rv3911.Rv3094c', source: 'Rv3911', target: 'Rv3094c' }
}
		
,
{ // edge Rv0757.Rv3133c
  data: { id: 'Rv0757.Rv3133c', source: 'Rv0757', target: 'Rv3133c' }
}
		
,
{ // edge Rv0735.Rv0735
  data: { id: 'Rv0735.Rv0735', source: 'Rv0735', target: 'Rv0735' }
}
		
,
],

style: [
  {
  	selector: 'node',
  	style: {
  		'background-color': '#10b578',
  		'label': 'data(id)'
  	}
  },
  {
  	selector: 'edge',
  	style: {
  		'width': 3,
  		'line-color': '#ccc',
  		'target-arrow-color': '#ccc',
  		'target-arrow-shape': 'triangle'
  	}
  }
],

layout: {
	name: 'cose',
	// rows: 8
}
});

cy.panningEnabled(true);

cy.boxSelectionEnabled(true);

cy.autounselectify(true);

cy.navigator({});


cy.panzoom({});

