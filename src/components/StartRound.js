import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import { renderToStaticMarkup } from 'react-dom/server';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import RoundInProgressAlert from './AlertRoundInProgress';
import { connect } from 'react-redux';
import { updatePlayerStats } from '../actions/optionActions';
import { roundStart, updatePot } from '../actions/gameActions';

class StartRound extends Component {
    state = {
      show: false
    }

    startGame = () => {
      if (this.props.game.roundInProgress) {
        this.setState({ show: true })
        return;
      }

      let { stakeAmount } = this.props.options;

      this.setPlayerAntes(stakeAmount)
      this.props.roundStart(true)
    }


    setPlayerAntes = (stakeAmount) => {
      let playersState = this.props.options.players;

      let updatedPlayersState = playersState.map(player => {
        return  {
          ...player,
          profit: player.profit - stakeAmount
        };
      });

      this.props.updatePlayerStats(updatedPlayersState);
      this.addAntesToPot();
    }

    addAntesToPot = () => {
      let newPotState = this.props.game.pot + (this.props.options.players.length * this.props.options.stakeAmount)
      this.props.updatePot(newPotState)
    }


    render() {
      return (
        <Container style={{textAlign: 'center'}}>
          <SweetAlert
            show={this.state.show}
            title=""
            html
            text={renderToStaticMarkup(<RoundInProgressAlert />)}
            onConfirm={() => this.setState({ show: false })}
          />
          <Button
          color="success"
          onClick={this.startGame}
          >
            Start Round
          </Button>
        </Container>
      );
    }
}
const mapStateToProps = (state) => ({
  options: state.options,
  game: state.game
});

export default connect(mapStateToProps, {
  updatePlayerStats,
  roundStart,
  updatePot
})(StartRound);
