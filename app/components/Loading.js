import React from 'React'
import PropTypes from 'prop-types'

const styles = {
    content : {
        fontWeight: 'bold',
        fontSize: '28px',
        textAlign: 'center'
    }
}

export default class Loading extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            content : props.text,
        }
    }

    componentDidMount() {
        const { speed, text } = this.props

        this.interval = window.setInterval(() => {
            this.state.content === text + '...'
                ? this.setState({ content : text })
                : this.setState(({ content }) => ({ content : content + '.'}))
        }, speed)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <p style={styles.content}>
                {this.state.content}
            </p>
        )
    }
}

Loading.propTypes = {
    text : PropTypes.string.isRequired,
    speed : PropTypes.number.isRequired
}

Loading.defaultProps = {
    text : 'Loading',
    speed : 300
}