import React from 'react';
import * as PropTypes from 'prop-types';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';


export class WalletConnector extends React.Component {
    constructor() {
        super(props);
        this.web3Modal = null;
        this.provider = null;
        this.setupValues();
    }

    csetupValues = () => {
        const providerOptions = {
            walletconnect: {
                package: WalletConnectProvider,
                options: {
                    infuraId: 'd09bd1bc72e6427d80fa37e01481cd34',
                },
            },
        };

        this.web3Modal = new Web3Modal({
            network: 'mainnet',
            cacheProvider: true,
            providerOptions,
        });
    };

    handleOnClick = async () => {
        this.provider = await this.web3Modal.connect();
    };

    render = () => {
        const { children } = this.props;

        return <div onClick={this.handleOnClick}>{children}</div>;
    };
}
