
'use strict';

import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  StatusBarIOS,
} from 'react-native';

var TimerMixin = require('./node_modules/react-timer-mixin/');
StatusBarIOS.setStyle('light-content')

class MDM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: '105年02月14日19時20分01秒',
      mixins: [TimerMixin],
    };
  }

  getTime() {
    var now = new Date();

    var month = now.getMonth() + 1; // 月
    var day = now.getDate(); // 日
    var hour = now.getHours(); // 時
    var min = now.getMinutes(); // 分
    var sec = now.getSeconds(); // 秒

    if(month < 10) { month = "0" + month; }
    if(day < 10) { day = "0" + day; }
    if(hour < 10) { hour = "0" + hour; }
    if(min < 10) { min = "0" + min; }
    if(sec < 10) { sec = "0" + sec; }

    this.setState({now: '105年' + month + '月' + day + '日'+ hour + '點' + min + '分' + sec + '秒',});
  }

  componentWillMount() {
    this.getTime();
    //TimerMixin.setTimeout(this.getTime(), 1000);
    // setTimeout(this.render(),1000);
  }

  componentDidMount() {
     TimerMixin.setInterval(function () {
      this.getTime();
    }.bind(this), 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./bg.png')} style={styles.bg}>
          <Text style={styles.time}>{this.state.now}</Text>
        </Image>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  bg: {
    width: 320,
    height: 568,
  },
  time: {
    fontSize: 20,
    marginTop: 520,
    textAlign: 'center',
    backgroundColor: '#33cc33',
  },
});

AppRegistry.registerComponent('MDM', () => MDM);
