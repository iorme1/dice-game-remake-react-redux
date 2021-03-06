import React, { Component } from 'react';
import dollarConverter from '../utils/dollarConverter';
import { setPlayers } from '../actions/playerActions';
import { setStakes } from '../actions/gameActions';
import { connect } from 'react-redux';
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import PropTypes from 'prop-types';


class GameModal extends Component {
  state = {
     modal: true
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  buildPlayers = (playerCount) => {
    let players = [];
    let playerNumber = 1;

    while (playerNumber <= playerCount) {
      let playerDetails = {
        id: playerNumber,
        profit: 0,
        selections: [],
        playedTurn: false,
        scoreTotal: 0,
        qualified: false
      };

      players.push(playerDetails);
      playerNumber+=1;
    }
    return players;
  }

  onSubmit = (e) => {
    e.preventDefault();

    const stakeAmount = dollarConverter(e.target[1].value);
    this.props.setStakes(stakeAmount);

    const playerCount = e.target[0].value;
    let players = this.buildPlayers(playerCount)

    this.props.setPlayers(players);
    
    // closes modal
    this.toggle();
  }

  render() {
    return  (
      <Container>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
        <ModalHeader toggle={this.toggle}>Game Options</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
              <Label for="playercount">How many players?</Label>
              <Input
                type="select"
                name="playercount"
                id="playerSelect"
                className="mb-2"
              >
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Input>
                <Label for="stakes">Pick your stakes</Label>
                <Input
                  type="select"
                  name="stakes"
                  id="stakeselect"
                >
                  <option>$1</option>
                  <option>$2</option>
                  <option>$3</option>
                  <option>$4</option>
                  <option>$5</option>
                </Input>
                <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  type="submit"
                  block
                >
                  Apply Selections
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

GameModal.propTypes = {
  setStakes: PropTypes.func.isRequired,
  setPlayers: PropTypes.func.isRequired,
  players: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  players: state.players,
  game: state.game
});


export default connect(mapStateToProps, { setStakes, setPlayers })(GameModal);
