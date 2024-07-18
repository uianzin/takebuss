const positions = [[-7.082519380498284, -41.46832205112596],[-7.082108401669599, -41.4678225877309],[-7.081488385780174, -41.46776885955422],[-7.080546020845916, -41.467687267997036],[-7.079426967492865, -41.46761809007638],[-7.07846703865515, -41.46754436276723],[-7.077970489314935, -41.46750602456361],[-7.077783185692173, -41.46744212755934],[-7.077727579915713, -41.46738904389465],
[-7.077671974132573, -41.46732612992168],[-7.077629776350988, -41.467290962100115],[-7.077507334875483, -41.467392886045694],[-7.077337685375855, -41.46754683749415],[-7.077160012023219, -41.46748849944676],[-7.077096129451817, -41.46747106508776],[-7.07698790425812, -41.46745090596472],[-7.076664294870237, -41.46734705810893],[-7.076386872128821, -41.4673040500725], [-7.076110269996643, -41.46727923774412],
[-7.075832026141602, -41.46716427395609],[-7.075756166349173, -41.467246418984224],[-7.075780463250039, -41.46719439182741],[-7.075834118911062, -41.4670831965332],[-7.07588068796857, -41.46685060453943],[-7.075927257024981, -41.46674859052028],[-7.075927105284662, -41.466679582021236],[-7.076071952820003, -41.466411570690305],[-7.076254903415441, -41.466102727862456],[-7.07642347585628, -41.465834716534836],
[-7.076641995596989, -41.46548743425731],[-7.076774356072609, -41.46526220407778],[-7.076929192812132, -41.464990417952215],[-7.077198908294366, -41.46454247414427],[-7.078336498580599, -41.462574934203545],[-7.0789252611324365, -41.461579747182974],[-7.079672292098178, -41.46032619428063],[-7.079915136823874, -41.45994813611928],[-7.0805758038578706, -41.458833796448786],[-7.080971475770729, -41.45814163109667],
[-7.0812436978486035, -41.45762170965927],[-7.081471604582143, -41.4569965280629],[-7.081582392536095, -41.456272465694354],[-7.0815475734677005, -41.455242191915126],[-7.081446281616296, -41.454897704101164],[-7.081177225029437, -41.45410027859465],[-7.080420700373801, -41.45209714569251],[-7.07989524737153, -41.450655400363054],[-7.078841174179912, -41.44782613463418],[-7.078360034859193, -41.44650240831041],
[-7.077821917928579, -41.44492031609156],[-7.077492716670924, -41.44397297458711],[-7.077350273745225, -41.44315641087094],[-7.077457897285632, -41.44224415609419],[-7.077600340174247, -41.44154242164306],[-7.077891556609994, -41.44020593647834],[-7.078284065437229, -41.43834315049155],[-7.0787810317800846, -41.435928546038404],[-7.079157712912825, -41.434186968720525],[-7.079369793750539, -41.4330514348119],
[-7.079490078366766, -41.432483667854285],[-7.079664563543387, -41.431566109665084],[-7.080057070857289, -41.429776686788806],[-7.080259655151402, -41.42871132631786],[-7.080493893128286, -41.42760131000773],[-7.080819251733154, -41.42613718350656],[-7.081208592698932, -41.42414680943445],[-7.081588437216463, -41.422242557275325],[-7.081648579242079, -41.42204479577451],[-7.082158203413737, -41.41960467367501],
[-7.082231006824411, -41.41917406392683],[-7.082639338770555, -41.41719644865533],[-7.08305716643309, -41.41526986862936],[-7.083351544789182, -41.41370053522487],[-7.083510991185991, -41.41309335895053],[-7.083628603724123, -41.412563026352075],[-7.083850695220641, -41.41192576599953],[-7.084204535687925, -41.41097746190629],[-7.084898813830213, -41.409151768712306],[-7.08538816648504, -41.407808970130766],
[-7.0856887938687025, -41.407018595604775],[-7.085055725127339, -41.40678893706398],[-7.084422655504441, -41.406584796142155],[-7.0836819629475904, -41.406348758192856],[-7.082703867108, -41.406042546795796],[-7.082219566450772, -41.40587668228898],[-7.081276286593051, -41.4055609017865],[-7.0803076817872235, -41.4052259830702],[-7.079570147997337, -41.404977186313246],[-7.0792346172144756, -41.40487830555063],
[-7.0786205319467586, -41.40460718087406],[-7.07800328046085, -41.404316917989505],[-7.077382862754677, -41.4040489830157],[-7.076544031361023, -41.40366940847479],[-7.075977423634415, -41.403372766186074],[-7.075322183668464, -41.40285922415385],[-7.074426370994478, -41.40199481489935],[-7.073869256929773, -41.40113997475204],[-7.073413435840112, -41.40021815085385],[-7.073160201710619, -41.39969822941006],
[-7.072470138002908, -41.40020539204541],[-7.071681944690983, -41.40078272812122],[-7.071143819969192, -41.40123247611207],[-7.070627852731166, -41.40161205064953],[-7.070266991878091, -41.401873606222495],[-7.070083395879929, -41.40202671191451],[-7.070037066248905, -41.402031496467686]]


const map = L.map('map' ).setView(positions[0],16) 
const layer  =L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	minZoom: 0,
	maxZoom: 25,
});

layer.addTo(map)

const marker= L.marker(positions[0])
marker.addTo(map) 

const marker2 = L.marker(positions[positions.length-1])
marker2.addTo(map)

const polyline = L.polyline(positions,{color:'#F00'})
polyline.addTo(map)

