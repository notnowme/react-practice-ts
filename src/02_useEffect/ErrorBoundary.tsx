import { Component, ErrorInfo } from "react";
import ErrorComponent from "./ErrorComponent";

interface Props {
    children: React.ReactNode;
}

interface States {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, States> {

    state: States = {
        hasError: false,
        error: null,
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({
            hasError: true,
            error: error,
        });
        console.error({error, errorInfo});
    }
    render() {
        if (this.state.hasError) {
            return <ErrorComponent error={this.state.error}/>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;