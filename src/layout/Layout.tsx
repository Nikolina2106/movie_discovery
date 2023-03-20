import React from 'react';
import Navbar from '../common/Navbar';

interface LayoutProps {
    children: JSX.Element;
    onSearch?: (searchTerm: string) => void;
}

Layout.defaultProps = {
    onSearch: undefined,
};

export default function Layout(props: LayoutProps): JSX.Element {
    const {children, onSearch} = props;

    return (
        <div className="l-base">
            <div className="l-base__body">
                <main>
                    <Navbar onSearch={onSearch} />
                    {children}
                </main>
            </div>
        </div>
    );
}
