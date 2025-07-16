
import React from 'react';

// Generic Icon Wrapper
const Icon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        {children}
    </svg>
);

export const SolidWorksIcon: React.FC = () => (
    <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </Icon>
);

export const AnsysIcon: React.FC = () => (
    <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.66.539-1.2 1.2-1.2h3.3c.66 0 1.2.54 1.2 1.2v11.826c0 .66-.539 1.2-1.2 1.2h-3.3c-.66 0-1.2-.54-1.2-1.2V6.087z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.25 10.038c0-.66.539-1.2 1.2-1.2h3.3c.66 0 1.2.54 1.2 1.2v7.925c0 .66-.539 1.2-1.2 1.2h-3.3c-.66 0-1.2-.54-1.2-1.2V10.038z" />
    </Icon>
);

export const FeaIcon: React.FC = () => (
    <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75C6.75 5.645 7.645 4.75 8.75 4.75h6.5c1.105 0 2 1.12 2 2.5v1.25c0 .828-.672 1.5-1.5 1.5h-2.5a1.5 1.5 0 0 1-1.5-1.5V8.5c0-.828.672-1.5 1.5-1.5h.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 11.25h14.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 15.25h14.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.75 19.25h6.5" />
    </Icon>
);

export const CadIcon: React.FC = () => (
    <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25l-3-3m3 3l3-3m-3 3v6m-3-6l-3 3m3-3l3 3m-6-3l-3 3m12-3l-3 3m-3-3l3 3M3 6.75h18M3 17.25h18" />
    </Icon>
);

export const CamIcon: React.FC = () => (
    <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </Icon>
);

export const StaplerIcon: React.FC = () => (
    <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v1.5H3.75V6zM3.75 15.75A2.25 2.25 0 016 13.5h12a2.25 2.25 0 012.25 2.25V18h-15v-2.25zM12 8.25v6" />
    </Icon>
);

export const CloseIcon: React.FC = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const LinkedinIcon: React.FC = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

export const MailIcon: React.FC = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
    </svg>
);

export const ChevronDoubleDownIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-sky-400">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
    </svg>
);