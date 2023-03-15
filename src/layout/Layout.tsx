import React from 'react';
import Navbar from "../common/Navbar";

interface LayoutProps {
    children: JSX.Element;
    onSearch?: (searchTerm: string) => void;
}

Layout.defaultProps = {
    placeholder: '',
    onSearch: undefined,
};

export default function Layout(props: LayoutProps): JSX.Element {
    const {children} = props;

    return (
        <div className="l-base">
            <main>
                <Navbar/>
                {children}
            </main>
        </div>
    );
}

