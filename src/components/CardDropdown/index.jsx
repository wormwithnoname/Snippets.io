import React, { useState } from 'react';

import { Dropdown, Menu, message, Modal, Select, Space, Tag, Typography } from 'antd';
import { ArrowsAltOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import { getByName, updateFolder } from 'model/FolderModel';
import {
  getEditors,
  getViewers,
  updateEditorAccess,
  updateViewerAccess,
} from 'model/SnippetAccessModel';
import { deleteSnippet } from 'model/SnippetModel';

import './styles.scss';

const { Text } = Typography;

function CardDropdown({ snippet, removeMessage }) {
  const { currentUser } = useAuth();
  const history = useHistory();

  const viewerLink = `${history.location.pathname}snippet/view/${snippet.snippetID}`;
  const editorLink = `${history.location.pathname}snippet/edit/${snippet.snippetID}`;

  const [addFolderModal, setAddFolderModal] = useState(false);
  const [addAccessModal, setAddAccessModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);

  const [isLoadingOptions, setIsLoadingOptions] = useState(true);
  const [foldersArr, setFoldersArr] = useState('');

  const [editorsText, setEditorsText] = useState();
  const [selectedFolder, setSelectedFolder] = useState();
  const [selectedKey, setSelectedKey] = useState('');
  const [viewersText, setViewersText] = useState();

  async function fetchFolders() {
    try {
      const foldersData = await getByName(currentUser.uid);
      foldersData.onSnapshot((querySnapshot) => {
        const folders = [];
        querySnapshot.forEach((doc) => {
          const obj = doc.data();
          obj.folderID = doc.id;
          folders.push(obj);
        });
        setFoldersArr(folders);
      });
      setIsLoadingOptions(false);
    } catch (error) {
      message.error('Failed to retrieve folders');
    }
  }

  async function fetchAccess() {
    try {
      const viewers = await getViewers(snippet.snippetID);
      const editors = await getEditors(snippet.snippetID);
      console.log(viewers, editors);
      // eslint-disable-next-line prefer-template
      console.log();
    } catch (error) {
      console.log(error.message);
    }
  }

  async function addSnippetToFolder() {
    try {
      if (selectedKey)
        await updateFolder(snippet.snippetID, selectedKey).then(() => {
          message.success('Snippet added to folder successfully');
        });
      setSelectedFolder();
      setSelectedKey();
      setAddFolderModal(false);
    } catch (error) {
      message.error('Failed to add snippet to folder');
    }
  }

  async function addUserAccess() {
    try {
      if (editorsText) {
        editorsText.forEach(async (email) => {
          await updateEditorAccess(snippet.snippetID, email);
          await updateViewerAccess(snippet.snippetID, email);
        });
      }
      if (viewersText) {
        viewersText.forEach(async (email) => {
          await updateViewerAccess(snippet.snippetID, email);
        });
      }
      setEditorsText();
      setViewersText();
      setAddAccessModal(false);
      message.success('Access to snippet was added successfully');
    } catch (error) {
      message.error('Failed to add access to user/s');
    }
  }

  async function deleteSnippetCard() {
    try {
      await deleteSnippet(snippet.snippetID).then(() => {
        message.success('Snippet deleted successfully');
      });
      setDeleteModal(false);
    } catch (error) {
      message.error('Failed to delete snippet');
    }
    setDeleteModal(false);
  }

  async function onEventAddFolder() {
    if (addFolderModal === false) {
      setAddFolderModal(true);
      await fetchFolders();
    } else setAddFolderModal(false);
  }

  function onEventDelete() {
    if (deleteModal === false) setDeleteModal(true);
    else setDeleteModal(false);
  }


  function onEventRemove() {
    if (removeModal === false) setRemoveModal(true);
    else setRemoveModal(false);
  }

  async function onEventAddAccess() {
    if (addAccessModal === false) {
      setAddAccessModal(true);
      await fetchAccess();
    } else setAddAccessModal(false);
  }

  function onChangeFolder(fieldValue, fieldOption) {
    setSelectedFolder(fieldValue);
    setSelectedKey(fieldOption.key);
  }

  function onChangeEditor(fieldValue) {
    setEditorsText(fieldValue);
  }

  function onChangeViewer(fieldValue) {
    setViewersText(fieldValue);
  }

  function redirectPage() {
    history.push(`/snippet/view/${snippet.snippetID}`);
  }

  const menu = (
    <Menu>
      {removeMessage ? (
        <Menu.Item key="1" onClick={onEventRemove}>
          {removeMessage}
        </Menu.Item>
      ) : (
        <Menu.Item key="1" onClick={onEventAddFolder}>
          Add to Folder
        </Menu.Item>
      )}
      <Menu.Item key="2" onClick={onEventAddAccess}>
        Add Viewers/Editors
      </Menu.Item>
      <Menu.Item key="3">
        <Link to={`/snippet/edit/${snippet.snippetID}`}>Edit</Link>
      </Menu.Item>
      <Menu.Item key="4" onClick={onEventDelete}>
        Delete
      </Menu.Item>
    </Menu>
  );

  function getLabel(language) {
    switch (language) {
      case 'c_cpp':
        return 'C/C++';
      case 'c#':
        return 'C#';
      case 'css':
        return 'CSS';
      case 'dart':
        return 'Dart';
      case 'html':
        return 'HTML';
      case 'java':
        return 'Java';
      case 'javascript':
        return 'Javascript';
      case 'json':
        return 'JSON';
      case 'php':
        return 'PHP';
      case 'python':
        return 'Python';
      case 'typescript':
        return 'Typescript';
      default:
        return 'Unknown';
    }
  }

  return (
    <Space className="dropdown">
      <Tag className="ant-tag">{getLabel(snippet.language)}</Tag>
      <Dropdown overlay={menu} placement="bottomCenter">
        <EllipsisOutlined />
      </Dropdown>
      <ArrowsAltOutlined onClick={redirectPage} />
      <Modal
        okText="Add"
        onOk={addSnippetToFolder}
        onCancel={onEventAddFolder}
        icon
        title="Add Snippet to Folder"
        visible={addFolderModal}
      >
        <Select
          loading={isLoadingOptions}
          onChange={onChangeFolder}
          placeholder="Select a folder"
          size="large"
          value={selectedFolder}
        >
          {foldersArr &&
            foldersArr.map((folderObj) => (
              <Select.Option key={folderObj.folderID} value={folderObj.folderName}>
                {folderObj.folderName}
              </Select.Option>
            ))}
        </Select>
      </Modal>
      <Modal
        okText="Add"
        onOk={addUserAccess}
        title="Add viewers/editors"
        onCancel={onEventAddAccess}
        visible={addAccessModal}
      >
        <Text>Viewers:</Text>
        <br />
        <Select
          maxTagCount="responsive"
          mode="tags"
          name="viewers"
          onChange={onChangeViewer}
          placeholder="Enter viewer's email address"
          size="middle"
          value={viewersText}
        />
        <br />
        <Text>Viewer Link: {viewerLink}</Text>
        <br />
        <br />
        <Text>Editors: </Text>
        <br />
        <Select
          maxTagCount="responsive"
          mode="tags"
          name="editors"
          onChange={onChangeEditor}
          placeholder="Enter editor's email address"
          size="middle"
          value={editorsText}
        />
        <br />
        <Text>Editor Link: {editorLink}</Text>
        <br />
      </Modal>
      <Modal
        okText="Delete"
        onOk={deleteSnippetCard}
        title="Delete code snippet"
        onCancel={onEventDelete}
        visible={deleteModal}
      >
        <p>Are you sure you want to delete this code snippet card?</p>
      </Modal>
      <Modal
        okText="Remove"
        title="Remove from Folder"
        onCancel={onEventRemove}
        visible={removeModal}
      >
        <p>Are you sure you want to remove this code snippet card from the folder?</p>
      </Modal>
    </Space>
  );
}
export default CardDropdown;
