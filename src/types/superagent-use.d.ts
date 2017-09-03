declare module 'superagent-use' {
    import {SuperAgent, SuperAgentStatic, SuperAgentRequest, Plugin} from 'superagent';

    function use(superagent: SuperAgentStatic): use.SuperAgentUse;

    namespace use {
        interface SuperAgentUse extends SuperAgent<SuperAgentRequest> {
            use(fn: Plugin): SuperAgentRequest;
        }
    }

    export = use;
}