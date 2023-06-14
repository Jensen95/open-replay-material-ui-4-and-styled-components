import { Component } from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('DevTools')

export class DevToolsPortal extends Component {
	private el: any
	constructor(props: any) {
		super(props)
		this.el = document.createElement('div')
	}

	public componentDidMount() {
		modalRoot?.appendChild(this.el)
	}

	public componentWillUnmount() {
		modalRoot?.removeChild(this.el)
	}

	public render() {
		return ReactDOM.createPortal(this.props.children, this.el)
	}
}
