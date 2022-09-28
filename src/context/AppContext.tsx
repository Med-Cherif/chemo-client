import { useContext, createContext, useState, useRef } from 'react';

const AppContext = createContext({});

const AppProvider = ({ children }: { children: JSX.Element }) => {

    const [sidebarVisible, setSidebarVisible] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    const closeModal = (e: any) => {
        if (!e.target) return;
        if (e.target.id === 'modal') {
            setIsModalOpen(false)
        };
    };

    // const [searchContentWidth, setSearchContentWidth] = useState(0);
    const searchContentRef = useRef<HTMLDivElement | null>(null)

    const openSidebar = () => setSidebarVisible(true);
    const closeSidebar = () => setSidebarVisible(false);

    return (
        <AppContext.Provider value={{
            sidebarVisible,
            searchContentRef,
            openSidebar,
            closeSidebar,
            isModalOpen,
            openModal,
            closeModal
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider

interface GlobalState {
    isModalOpen: boolean
    openModal: () => void
    closeModal: () => void
    sidebarVisible: boolean
    searchContentRef: React.MutableRefObject<HTMLDivElement | null>
    openSidebar: () => void
    closeSidebar: () => void
}

export const useGlobalState = () => {
    return useContext(AppContext) as GlobalState
}