import React from 'react';
import {Slide, toast, ToastContainer} from 'react-toastify';
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

                    <ToastContainer
                        position={toast.POSITION.BOTTOM_LEFT}
                        theme="colored"
                        limit={6}
                        transition={Slide}
                        autoClose={5000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </main>
            </div>
        </div>
    );
}
