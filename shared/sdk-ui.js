import AppExtensionsSDK, {
    Command,
} from '@pipedrive/app-extensions-sdk';
let SDK;
export const getUiSDK = async () => {
    console.log('sdk loading');
    try {
        if (SDK) return SDK;
     
        SDK = await new AppExtensionsSDK().initialize();
        console.log('sdk loaded');
        return SDK;
    } catch (e) {
    
    }
}

export const closeModal = async (sdk) => {
  
    await sdk.execute(Command.CLOSE_MODAL, {
        type: Modal.CUSTOM_MODAL,
        action_id: 'cc59dcb4-85b4-4b8a-b7a3-166b81e9aafa',
    });
};

export const openModal = async (sdk) => {
    console.log(sdk,'dasdsadas');
    await sdk.execute(Command.OPEN_MODAL, {
        type: Modal.CUSTOM_MODAL,
        action_id: 'cc59dcb4-85b4-4b8a-b7a3-166b81e9aafa',
    });
};