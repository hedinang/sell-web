import { DashOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import { useMemo } from "react";
import { openNotificationError } from "../../utils/Utils";
import apiFactory from "../../api";
import { conversationType } from "../../config/Constant";

const DropdownConversationItem = ({
  conversation,
  languageMap,
  conversationList,
  handleUpdateConversationList,
  labelList,
  onChangeLabel,
  labelSelectedId,
}) => {
  const conversationOption = useMemo(() => {
    let labelChildren = [];

    if (labelList && labelList.length > 0) {
      const mappedLabels = labelList.map((label) => ({
        key: label?.labelId,
        label: label?.labelName,
      }));

      labelChildren = [
        ...mappedLabels,
        {
          key: "unselected",
          label:
            languageMap?.["select.conversation.option.unselected"] ??
            "Unselected",
        },
      ];
    }

    return [
      conversation?.type !== conversationType.NOTIFICATION
        ? {
            key: "pinnedConversation",
            label: conversation?.pinnedConversationTs
              ? languageMap?.["select.conversation.option.unpinConversation"] ??
                "Unpin conversation"
              : languageMap?.[
                  "select.conversation.option.pinnedConversation"
                ] ?? "Pinned conversation",
          }
        : null,
      conversation?.type !== conversationType.NOTIFICATION
        ? {
            key: "notifications",
            label: conversation?.alarm
              ? languageMap?.[
                  "select.conversation.option.turnOffNotifications"
                ] ?? "Turn off notifications"
              : languageMap?.[
                  "select.conversation.option.turnOnNotifications"
                ] ?? "Turn on notifications",
          }
        : null,
      {
        key: "add-label",
        label: languageMap?.["select.conversation.option.more"] ?? "Add label",
        trigger: "hover",
        onClick: (e) => {
          e?.domEvent?.stopPropagation?.();
          e?.stopPropagation?.();
        },
        children: labelChildren,
      },
    ].filter(Boolean);
  }, [languageMap, conversation, labelList, labelSelectedId, conversationList]);

  const handleMenuClick = async (e) => {
    e.domEvent.stopPropagation();
    e?.stopPropagation?.();

    switch (e.key) {
      case "pinnedConversation":
        await handlePinnedConversation();
        break;
      case "notifications":
        await handleTurnNotification();
        break;
      case "add-label":
        break;
      default:
        if (e?.key && conversation) {
          await handleLabelClick(e?.key, conversation?.userConversationId);
        }
        break;
    }
  };

  const handleLabelClick = async (labelIdSelected, userConversationId) => {
    if (!labelIdSelected || !userConversationId) return;

    let labelId = null;

    if (labelIdSelected !== "unselected") labelId = labelIdSelected;

    await onChangeLabel(labelId, userConversationId);
  };

  const handleTurnNotification = async () => {
    try {
      const result = await apiFactory.conversationApi.changeAlarm({
        userConversationId: conversation?.userConversationId,
      });

      if (result?.status !== 200) {
        return openNotificationError(result?.message);
      }

      const newAlarmState = result?.data?.alarm;
      const conversations = conversationList?.map((item) => {
        if (item?.conversationId === conversation?.conversationId) {
          return { ...item, alarm: newAlarmState };
        }
        return item;
      });

      handleUpdateConversationList(conversations);
    } catch (error) {}
  };

  const handlePinnedConversation = async () => {
    try {
      const result = await apiFactory.conversationApi.pinnedConversation(
        conversation?.userConversationId
      );

      if (result?.status !== 200) {
        return openNotificationError(result?.message);
      }

      const newPinnedTs = result?.data;
      const conversations = conversationList?.map((item) => {
        if (item?.conversationId === conversation?.conversationId) {
          return { ...item, pinnedConversationTs: newPinnedTs };
        }
        return item;
      });

      handleUpdateConversationList(conversations);
    } catch (error) {}
  };

  return (
    <Dropdown
      menu={{ items: conversationOption, onClick: handleMenuClick }}
      placement="bottomLeft"
      trigger={["click"]}
    >
      <Button
        icon={<DashOutlined />}
        type="text"
        size="small"
        onClick={(e) => e?.stopPropagation?.()}
      />
    </Dropdown>
  );
};

export { DropdownConversationItem };
